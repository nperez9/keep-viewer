async function getKeepNotes() {
  return new Promise((resolve, reject) => {
    resolve({ notes: [] });
  });
}

export { getKeepNotes as GET };
