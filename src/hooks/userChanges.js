export async function userChanges() {
  const res = await fetch("http://localhost:8080/api/user", {
    method: "PUT",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch IP address");
  }
  const data = await res.json();
  return data;
}
