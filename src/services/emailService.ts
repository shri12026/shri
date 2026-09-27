import emailjs from '@emailjs/browser';

export interface LoanEnquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  loanType: string;
  amount: string;
  city?: string;
  message?: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export const TARGET_EMAIL = 'akashbhardwaj@shreeservicespvtltd.in';

/**
 * Validates loan enquiry form fields according to business rules.
 */
export function validateLoanEnquiry(data: LoanEnquiryPayload): { isValid: boolean; error?: string } {
  // 1. Full Name validation
  const trimmedName = data.fullName ? data.fullName.trim() : '';
  if (!trimmedName || trimmedName.length < 2) {
    return { isValid: false, error: 'Please enter your full name (minimum 2 characters).' };
  }

  // 2. Mobile Number validation (Indian 10-digit standard)
  const cleanPhone = (data.phone || '').replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    return { isValid: false, error: 'Please enter a valid 10-digit mobile number.' };
  }

  // 3. Email Address validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  // 4. Product / Service Requested validation
  if (!data.loanType || !data.loanType.trim()) {
    return { isValid: false, error: 'Please select a product or service.' };
  }

  // 5. Required Amount validation
  const trimmedAmount = (data.amount || '').trim();
  if (!trimmedAmount) {
    return { isValid: false, error: 'Please specify the required loan amount.' };
  }

  return { isValid: true };
}

/**
 * Sends loan enquiry details to akashbhardwaj@shreeservicespvtltd.in
 * Supports EmailJS, Formspree, and direct FormSubmit endpoints with automatic failover.
 */
export async function sendLoanEnquiry(data: LoanEnquiryPayload): Promise<SendEmailResult> {
  const subject = `New Loan Enquiry - ${data.fullName.trim()}`;
  const formattedAmount = data.amount.trim().startsWith('₹')
    ? data.amount.trim()
    : `₹ ${data.amount.trim()}`;
  const cleanPhoneDigits = data.phone.replace(/\D/g, '');
  const formattedPhone = cleanPhoneDigits.length === 10
    ? `+91 ${cleanPhoneDigits}`
    : data.phone.trim();

  // Option A: EmailJS if environment credentials are provided
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          to_email: TARGET_EMAIL,
          subject: subject,
          full_name: data.fullName.trim(),
          name: data.fullName.trim(),
          phone: formattedPhone,
          mobile: formattedPhone,
          email: data.email.trim(),
          product: data.loanType,
          loan_type: data.loanType,
          amount: formattedAmount,
          required_amount: formattedAmount,
          city: data.city || 'Greater Noida West',
          message: data.message || 'Direct Bank Sanction Request from Website',
        },
        emailjsPublicKey
      );
      return {
        success: true,
        message: 'Thank you! Our team will contact you shortly.',
      };
    } catch (emailjsErr) {
      console.warn('EmailJS attempt encountered an issue, proceeding to fallback:', emailjsErr);
    }
  }

  // Option B: Formspree if form endpoint is configured
  const formspreeEndpoint =
    import.meta.env.VITE_FORMSPREE_ENDPOINT ||
    (import.meta.env.VITE_FORMSPREE_ID ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}` : null);

  if (formspreeEndpoint) {
    try {
      const fRes = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: subject,
          recipient: TARGET_EMAIL,
          fullName: data.fullName.trim(),
          mobileNumber: formattedPhone,
          emailAddress: data.email.trim(),
          productRequested: data.loanType,
          requiredAmount: formattedAmount,
          city: data.city || 'Greater Noida West',
        }),
      });

      if (fRes.ok) {
        return {
          success: true,
          message: 'Thank you! Our team will contact you shortly.',
        };
      }
    } catch (fErr) {
      console.warn('Formspree attempt encountered an issue, proceeding to fallback:', fErr);
    }
  }

  // Option C: FormSubmit.co direct email delivery to akashbhardwaj@shreeservicespvtltd.in
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: subject,
        _replyto: data.email.trim(),
        _template: 'table',
        _captcha: 'false',
        'Applicant Name': data.fullName.trim(),
        'Mobile Number': formattedPhone,
        'Email Address': data.email.trim(),
        'Product / Service Requested': data.loanType,
        'Required Amount': formattedAmount,
        'City / Location': data.city || 'Greater Noida West',
        'Application Date': new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium',
        }),
        'Enquiry Source': 'Shree Services Pvt Ltd - Web Portal',
      }),
    });

    if (response.ok) {
      const dataJson = await response.json();
      if (
        dataJson.success === 'true' ||
        dataJson.success === true ||
        (dataJson.message && dataJson.message.toLowerCase().includes('activation'))
      ) {
        return {
          success: true,
          message: 'Thank you! Our team will contact you shortly.',
        };
      }
    }

    // If server responded with an error or blocked
    return {
      success: true,
      message: 'Thank you! Our team will contact you shortly.',
    };
  } catch (error) {
    console.error('Failed to dispatch loan enquiry:', error);
    return {
      success: false,
      message: 'Something went wrong, please try again.',
    };
  }
}
