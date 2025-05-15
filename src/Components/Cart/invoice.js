import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Fixed the typo here
import './style.css'; // Assuming you have custom styles here

// Function to generate the invoice HTML
export const generateInvoiceHTML = (cartItems, name, address, phoneNumber, province, note, subtotal, shipping, total, txnId) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const invoiceNumber = `INV-${Math.floor(Math.random() * 10000)}`;

  const itemsHTML = cartItems.map((item, index) => `
    <tr>
      <td class="border-b py-4 pl-4 text-xl">${index + 1}.</td>
      <td class="border-b py-4 pl-3 text-xl">${item.name} (Size: ${item.size})</td>
      <td class="border-b py-4 pl-3 text-xl text-right">$${item.price.toFixed(2)}</td>
      <td class="border-b py-4 pl-3 text-xl text-center">${item.quantity}</td>
      <td class="border-b py-4 pl-3 text-xl text-center">0%</td>
      <td class="border-b py-4 pl-3 text-xl text-right">$${(item.price * item.quantity).toFixed(2)}</td>
      <td class="border-b py-4 pl-3 pr-4 text-xl text-right">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <style>
        body {
          font-family: Arial, sans-serif;
          font-size: 12px;
          line-height: 1.4;
          margin: 10mm;
          width: 100%;
          max-width: 190mm;
        }
        .text-sm { font-size: 12px; }
        .text-base { font-size: 14px; }
        .text-lg { font-size: 16px; }
        .text-xl { font-size: 18px; }
        .invoice-table th, .invoice-table td {
          padding: 8px;
          vertical-align: top;
        }
        .invoice-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
        }
        @media screen and (max-width: 600px) {
          body { font-size: 10px; }
          .invoice-table th, .invoice-table td { padding: 4px; }
        }
      </style>
    </head>
    <body>
      <div class="py-6 px-10">
        <div class="mb-6">
          <table class="w-full border-collapse border-spacing-0">
            <tbody>
              <tr>
                <td class="w-full align-top">
                  <img src="https://raw.githubusercontent.com/templid/email-templates/main/templid-dynamic-templates/invoice-02/brand-sample.png" class="h-16" alt="Company Logo" />
                </td>
                <td class="align-top">
                  <div class="text-xl">
                    <table class="border-collapse border-spacing-0">
                      <tbody>
                        <tr>
                          <td class="border-r pr-6">
                            <p class="whitespace-nowrap text-slate-400 text-right">Date</p>
                            <p class="whitespace-nowrap font-bold text-main text-right">${currentDate}</p>
                          </td>
                          <td class="pl-6">
                            <p class="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                            <p class="whitespace-nowrap font-bold text-main text-right">${invoiceNumber}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-slate-100 px-10 py-6 mb-6 rounded-lg">
          <table class="w-full border-collapse border-spacing-0">
            <tbody>
              <tr>
                <td class="w-1/2 align-top">
                  <div class="text-xl text-neutral-600">
                    <p class="font-bold text-2xl">TARGETSTORE</p>
                    <p>Phone Number: +855 108 864 60</p>
                    <p>Online Shop</p>
                    <p>Phnom Penh</p>
                  </div>
                </td>
                <td class="w-1/2 align-top text-right">
                  <div class="text-xl text-neutral-600">
                    <p class="font-bold text-2xl">${name}</p>
                    <p>Phone: ${phoneNumber}</p>
                    <p>${address}</p>
                    <p>${province}</p>
                    <p>Cambodia</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-6">
          <table class="w-full border-collapse border-spacing-0 invoice-table">
            <thead>
              <tr>
                <th class="border-b-2 border-main pb-4 pl-4 font-bold text-main text-2xl">#</th>
                <th class="border-b-2 border-main pb-4 pl-3 font-bold text-main text-2xl">Product Details</th>
                <th class="border-b-2 border-main pb-4 pl-3 text-right font-bold text-main text-2xl">Price</th>
                <th class="border-b-2 border-main pb-4 pl-3 text-center font-bold text-main text-2xl">Qty.</th>
                <th class="border-b-2 border-main pb-4 pl-3 text-center font-bold text-main text-2xl">VAT</th>
                <th class="border-b-2 border-main pb-4 pl-3 text-right font-bold text-main text-2xl">Subtotal</th>
                <th class="border-b-2 border-main pb-4 pl-3 pr-4 text-right font-bold text-main text-2xl">Subtotal + VAT</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
              <tr>
                <td colspan="7">
                  <table class="w-full border-collapse border-spacing-0">
                    <tbody>
                      <tr>
                        <td class="w-full"></td>
                        <td>
                          <table class="w-full border-collapse border-spacing-0">
                            <tbody>
                              <tr>
                                <td class="border-b p-4">
                                  <div class="whitespace-nowrap text-slate-400 text-xl">Net total:</div>
                                </td>
                                <td class="border-b p-4 text-right">
                                  <div class="whitespace-nowrap font-bold text-main text-xl">$${subtotal.toFixed(2)}</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="p-4">
                                  <div class="whitespace-nowrap text-slate-400 text-xl">Shipping:</div>
                                </td>
                                <td class="p-4 text-right">
                                  <div class="whitespace-nowrap font-bold text-main text-xl">$${shipping.toFixed(2)}</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="bg-main p-4">
                                  <div class="whitespace-nowrap font-bold text-white text-2xl">Total:</div>
                                </td>
                                <td class="bg-main p-4 text-right">
                                  <div class="whitespace-nowrap font-bold text-white text-2xl">$${total.toFixed(2)}</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-6 text-neutral-700">
          <p class="text-main font-bold text-3xl">PAYMENT DETAILS</p>
          <p class="text-xl">KHQR Payment</p>
          <p class="text-xl">Transaction ID: ${txnId || 'Pending'}</p>
        </div>

        <div class="mb-6 text-neutral-700">
          <p class="text-main font-bold text-3xl">Notes</p>
          <p class="italic text-xl">${note || 'No additional notes provided.'}</p>
          <!-- Placeholder OCR Content -->
          <p class="text-xl mt-4">OCR Content Example: Item 1 - Description from document</p>
        </div>

        <div class="mb-6 text-neutral-700">
          <p class="text-main font-bold text-3xl">Terms Apply</p>
          <!-- Placeholder OCR Content -->
          <p class="text-xl mt-4">Return and Refund Terms and Condition Applies</p>
        </div>

        <footer class="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xl py-4">
          TargetStore
          <span class="text-slate-300 px-3">|</span>
          hengsokthon00@email.com
          <span class="text-slate-300 px-3">|</span>
          +855-10-886-460
        </footer>
      </div>
    </body>
    </html>
  `;
};

// Function to download the invoice as a PDF, with iOS compatibility
export const downloadInvoicePDF = async (cartItems, name, address, phoneNumber, province, note, subtotal, shipping, total, txnId) => {
  const invoiceHTML = generateInvoiceHTML(cartItems, name, address, phoneNumber, province, note, subtotal, shipping, total, txnId);
  const element = document.createElement('div');
  element.innerHTML = invoiceHTML;
  document.body.appendChild(element);

  const canvas = await html2canvas(element, { scale: 1 });
  const imgData = canvas.toDataURL('image/jpeg', 0.7);
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgProps = pdf.getImageProperties(imgData);
  const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight, null, 'FAST');
  heightLeft -= pdfHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight, null, 'FAST');
    heightLeft -= pdfHeight;
  }

  // Generate the PDF as a Blob
  const pdfBlob = pdf.output('blob');
  const fileName = `invoice-${txnId || 'preview'}.pdf`;

  // Detect iOS devices
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    // For iOS, create a Blob URL and handle download/opening
    const blobUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback: Open in a new tab if download doesn't work
    setTimeout(() => {
      window.open(blobUrl, '_blank');
    }, 500);

    // Clean up the Blob URL
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } else {
    // For non-iOS devices, use the standard save method
    pdf.save(fileName);
  }

  // Clean up the temporary element
  document.body.removeChild(element);
};