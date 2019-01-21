
import React from 'react';

class Wiki extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }
  
  render() {

    interface Dictionary {
      entries: any[];
    };

    const dictionary = {
      entries: [
        {
          word: `POINTS`,
          definition: `a fiat measure of capital, the accrual of which is the design and purpose of this system.`
        },
        {
          word: `Time`,
          definition: `one of the 3 physical, linear dimension of the physical universe. It is subject to relativistic effects. It is measured in increasing microseconds from jan 1, 1970 aka "ooonix time"`
        },
        {
          word: `Craft`,
          definition: `a distinct computer system. It's composed of, at the very least, HARDWARE and SOFTWARE components but _may also_ include BIOWARE and QWARE COMPONENTS and CARGO.`
        },
        {
          word: `COMPONENT`,
          definition: `a piece of a Craft. It is either HARDWARE, SOFTWARE, BIOWARE, or QWARE`
        },
        {
          word: `HARDWARE`,
          definition: `a physical, non-biological, piece of a craft. It might be bought for POINTS or assembled, given the RESOURCES and the PLANS.`
        },
        {
          word: `SOFTWARE`,
          definition: `non-QUANTUM, old fashioned data and code written to and executed by a Quomputer. It is written in the langugage of TYPESCRIPT. For some STRANGE and MYSTEROIUS reason, niether BIOWARE, SOFTWARE or HARDWARE can create SOFTWARE, nor can it be purchased- only QWARE is capable of crafting new SOFTWARE!`
        },
        {
          word: `BIOWARE`,
          definition: `a quirky piece of found technology. Organic life can be used for physical labor, ideation and automation, but its rather fragile and inconsistent. May require extra maintenance. However, for some STRANGE and MSYTERIOUS reason, only BIOWARE can create new QROMS.`
        },
        {
          word: `QWARE`,
          definition: `QWARE describes QPUs, QROM and The QNET. QWARE is very STRANGE and MYSTERIOUS.`
        },
        {
          word: `QDATA`,
          definition: `QUANTUM data. Not much is known about QDATA, other than it is stored in the QNET between QPUS.`
        },
        { 
          word: `QPU`,
          definition: `A Quantum Processor Unit is a very special type of QDATA processor. QPUs are all split from an original seed and form a natural QNET. This QNET will allow instantaneous transmission of QROM between all QPUs. However, a side effect is that only 1 QPU may be active on any timeline. They are very expensive and very fragile. They also do not require any ELECTRICTY to run`},
        { 
          word: `Qdrive`,
          definition: `Quantum Drive is a very special type of QDATA storage, stored in the QNET formed between QPUs. It can be written to and read. Though QDATA can be transmitted instantaneously to any QPU in it's QNET, the qdrive can only be active on a single QPU on any timeline.`
        },
        { 
          word: `QROM`,
          definition: `Quantum Read Only Memory is a very special type of _read only_ QDATA storage, stored in the QNET formed between QPUs. QROMS can be shared instantly with all QPUs, though only one QPU can be active per timeline. QROMs are usually used to store QSIMS. For some STRANGE and MYSTEROIUS reason, QROMs cannot be crafted by other QWARE.`
        },
        { 
          word: `QSIM`,
          definition: `Quantum Simulations is a very special type of QWARE, stored on QROMS in the QNET. The can produce highly accurate physical software simulations, given enough ELECTRICTY, TIME and a test script. QSIMS can be ONLY created by BIOWARE and advanced SOFTWARE.`
        },
        {
          word: `Qomputer`,
          definition: `A Quomputer is an ordinary computer backing up a QPU. When the QPU is offline, the ordinry ooonix system takes over and runs in an automated sleep mode. It requires a small amount of electricty to run in user mode and even less to run in sleep mode.Nonetheless, it does require some power to function. It can be rebooted by it's QPU after a power loss, provided the power.`},
        { 
          word: `ooonix`,
          definition: `A quomputer operating system invented in the latter half of the 20th century. In the absence of any active QPU, this sytem runs in a long term sleep mode. When connected to an active QPU, it operates in USER mode.`},
        { 
          word: `thuster`,
          definition: `A thruster is a device to moving a craft. It is attached to a frame and has limited fuel. It must be mounted to a mount point of a frame. With a single thruster, you can travel in a straight line- with more than one, you can turn your vessel.`},
        {
          word: `sensors`,
          definition: `IO devices such as cameras, radio telescopes etc`
        },
        {
          word: `recievers`,
          definition: `IO devices such as radio transmitters`
        },
        {
          word: `io`,
          definition: `input-output devices. Some are sensors, some are receivers and some are both.`
        },
        {
          word: `telemtry`,
          definition: `IO data, current and recorded.`
        },
        { 
          word: `cargo bay`,
          definition: `A HARDWARE IO ßCOMPONENT for holding anything that can fit. It is attached to one or more mount points of a frame, depending on the payload. It may or may not be shielded`
        },
        
        { word: `landing apparatus`, definition: `A platform for touching down on a world`},
        { word: `Electrical`, definition: `Power generation, storage, and transmission of zaps`},
        { word: `frame`, definition: `A platform for holding everything in place.`},
        { word: `zaps`, definition: `A unit of electricity, eg: "This battery has stored 10 zaps."`},
        { word: `bips`, definition: `A unit of SOFTWARE. eg: "This drive can store 100 bigo-bips"`},
        { word: `ugs`, definition: `A unit of MASS. eg: "This craft has a mass of 9.9 humungo-ugs"`},
        { word: `oofs`, definition: `A unit of FORCE. eg: "This thruster produces 15 teeny-oofs"`},
        { word: `tiks`, definition: `A unit of TIME`},
        { word: `Frenchy system`, definition: `Otherwise known as "Système Français" or "SF". A nomenclature for numbers with a high number of decimals. Each suffix correponds to an order of magntitude. -1 is 'itsy', -2 'itstybitsy', 3 is 'humongo', 4 is 'giganto', etc. For example, this modem can transmit 5.5 humungo-bips per itsy-tick `},
      ]
    } as Dictionary;;

    return (
      <div>
        <h2>Welcome to the Wiki</h2>

        <ol>
        {
          dictionary.entries.sort((a, b) =>  a.word.localeCompare(b.word)).map((lmnt) => {
            return (<li>
              <h3>
                {lmnt.word}
              </h3>
              <p>{lmnt.definition}</p>
            </li>);
          })
        }



        </ol>

      </div>
    );
  }
}
// export default Awsim;
export default <Wiki />;
