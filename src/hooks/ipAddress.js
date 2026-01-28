export async function getIpAddress(user) {
  const res = await fetch("http://localhost:8080/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch IP address");
  }
  const data = await res.json();
  return data;
}

export async function resetIpAddress(user) {
  const res = await fetch("http://localhost:8080/api/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Failed to reset IP address");
  }
  const data = await res.json();
  return data;
}
