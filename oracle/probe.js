const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const toRna = (dna) =>
  dna.replace(/./g, (nucleotide) => DNA_TO_RNA[nucleotide]);

const __in = ["", "C", "G", "T", "A", "ACGTGGTCTTAA"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: toRna(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
