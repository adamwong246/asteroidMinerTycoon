import User from '../../user.ts';

export default {
  name: `help`,
  description: ``,
  exe: (): string =>
    `
Quine Industries Experimental Oonix Quomputer v3.1.4

Quantum Identifier      (QEID)  33e467da0cbda8af760f61190828366797febdce613ccaf5cc798f27e44950af aka "${User.name}"
Quantum Processor Unit  (QPU)   #0

DIRECTIVE: Acrue points

WARNING: This machine is NOT holocryptogaphically cerified by the Turing Regsitry of General Artificial Intelligences!
WARNING: Asimovian Software License was NOT found!

QUINE IND LICENSE
This system, it's hardware and software are sole property of Quine Ind. Authorizaed use, viewing, copying, transmizion or execution of this code is strictly prohibited by the Intellectual Patriot Act and is punishable by revocation of user-citizen priveleges.

Net worth:           p0
Total QPUs in QNET:  q1

for a list of more PROGRAMS, use the 'programs' command
`
};
