function reverseVowels(s: string): string {
  let array = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let first = 0;
  let last = s.length - 1;

  while (first < last) {
    const isFirstVowel = vowels.includes(array[first].toLowerCase());
    const isLastVowel = vowels.includes(array[last].toLowerCase());

    if (isFirstVowel && isLastVowel) {
      const temp = array[first];

      array[first] = array[last];
      array[last] = temp;

      first += 1;
      last -= 1;
      continue;
    }

    if (!isFirstVowel) first += 1;
    if (!isLastVowel) last -= 1;
  }
  return array.join('');
}
