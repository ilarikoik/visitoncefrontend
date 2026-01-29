export async function getTrivia() {
  const res = await fetch("http://localhost:8080/api/trivia");
  if (!res.ok) {
    throw new Error("Failed to fetch trivia questions");
  }
  const data = await res.json();
  return data;
}
