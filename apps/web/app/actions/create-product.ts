"use server";

export default async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;

  await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    body: JSON.stringify({
      name,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(name, price);
}
