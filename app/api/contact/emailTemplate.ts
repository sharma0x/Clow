import { companyInfo } from "./info";

interface EmailTemplateProps {
    name: string,
    email: string,
    company: string,
    projectType: string,
    message: string,
    privacyAccepted: boolean
}

export function generateEmailTemplate({
    name,
    email,
    company,
    projectType,
    message,
}: EmailTemplateProps) {

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        color: #000000;
        font-family: "Times New Roman", Times, serif;
        font-size: 16px;
        line-height: 1.8;
      }
      .wrapper {
        max-width: 640px;
        margin: 40px auto;
        padding: 0 24px;
      }
      p {
        margin: 0 0 16px 0;
      }
      .label {
        font-weight: bold;
      }
      .divider {
        border: none;
        border-top: 1px solid #cccccc;
        margin: 24px 0;
      }
      .details-block {
        margin: 16px 0;
      }
      .details-block p {
        margin: 6px 0;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">

      <p>Dear ${name},</p>

      <p>
        Thank you for reaching out to <span class="label">${companyInfo.name}</span>. We have received your message and will get back to you as soon as possible.
      </p>

      <hr class="divider">

      <p><span class="label">Submission Details</span></p>

      <div class="details-block">
        <p><span class="label">Name:</span> ${name}</p>
        <p><span class="label">Email:</span> ${email}</p>
        ${company ? `<p><span class="label">Company:</span> ${company}</p>` : ""}
        ${projectType ? `<p><span class="label">Project Type:</span> ${projectType}</p>` : ""}
        <p><span class="label">Message:</span></p>
        <p>${message}</p>
      </div>

      <hr class="divider">

      <p>
        If you have any additional questions or need to update your submission, please feel free to reach us at
        <a href="mailto:${companyInfo.email}" style="color: #000000;">${companyInfo.email}</a>.
      </p>

      <p>We look forward to working with you.</p>

      <p>
        Warm regards,<br>
        <span class="label">${companyInfo.name}</span>
      </p>

    </div>
  </body>
  </html>
  `;
}