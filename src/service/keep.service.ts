export async function getKeepNotes(token: string) {
  const response = await fetch('https://keep.googleapis.com/v1/notes', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}
