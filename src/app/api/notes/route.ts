async function createNote() {
  return new Promise((resolve, reject) => {
    resolve({ notes: [] });
  });
}

export { createNote as POST };
