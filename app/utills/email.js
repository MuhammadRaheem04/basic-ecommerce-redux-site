import emailjs from "@emailjs/browser";

export const sendOrderEmail = async ({ name, email, address, cartItems }) => {
  const productDetails = cartItems
    .map(
      (item) => `
        <tr style="background-color: #ffffff;">
          <td style="padding: 8px;">
            <img src="${item.image}" alt="${item.title}" width="60" style="border-radius: 4px;" /><br />
            <strong>${item.title}</strong><br/>
            Size: ${item.size || "N/A"}<br/>
            Color: ${item.color || "N/A"}
          </td>
          <td style="padding: 8px; text-align: center;">${item.qty}</td>
          <td style="padding: 8px; text-align: right;">PKR ${item.price}</td>
        </tr>
      `
    )
    .join("");

  const templateParams = {
    user_name: name,
    user_email: email,
    user_address: address,
    product_details: productDetails,
  };

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  } catch (err) {
    console.error("Email sending error:", err?.text || err);
  }
};


