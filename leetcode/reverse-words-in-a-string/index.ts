function reverseWords(s: string): string {
  const array = s.split(' ');

  const reversed = array.reduce((acc: string[], word: string) => {
    if (word) acc.unshift(word);

    return acc;
  }, []);

  return reversed.join(' ');
}
