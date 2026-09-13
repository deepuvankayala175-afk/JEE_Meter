// Question bank: original practice questions for JEE-style preparation.
// Each concept has a "main" and an "advanced" set. Answers are 0-based indices.

const SUBJECTS = {
  physics: { name: "Physics", color: "physics" },
  chemistry: { name: "Chemistry", color: "chemistry" },
  maths: { name: "Mathematics", color: "maths" },
};

const LEVELS = {
  main: "JEE Main",
  advanced: "JEE Advanced",
};

const CONCEPTS = [
  // ---------------- PHYSICS ----------------
  {
    id: "kinematics",
    subject: "physics",
    title: "Kinematics",
    description: "1D/2D motion, projectiles, relative velocity",
    questions: {
      main: [
        {
          q: "A particle starts from rest and moves with constant acceleration 2 m/s². Distance covered in the 5th second is:",
          options: ["9 m", "10 m", "25 m", "50 m"],
          answer: 0,
          explanation: "sₙ = u + a(2n−1)/2 = 0 + 2(9)/2 = 9 m.",
        },
        {
          q: "A ball is thrown vertically upward with speed 20 m/s (g = 10 m/s²). Time to return to the thrower's hand is:",
          options: ["2 s", "4 s", "1 s", "8 s"],
          answer: 1,
          explanation: "Total time of flight T = 2u/g = 2(20)/10 = 4 s.",
        },
        {
          q: "For a projectile, the horizontal range is maximum when the angle of projection is:",
          options: ["30°", "60°", "45°", "90°"],
          answer: 2,
          explanation: "R = u² sin2θ / g is maximum when sin2θ = 1, i.e. θ = 45°.",
        },
        {
          q: "The velocity-time graph of a body is a straight line parallel to the time axis. The body is:",
          options: ["At rest", "Moving with uniform velocity", "Uniformly accelerated", "Decelerating"],
          answer: 1,
          explanation: "Constant velocity ⇒ zero acceleration, v–t graph is horizontal.",
        },
        {
          q: "A car accelerates from 10 m/s to 30 m/s in 4 s. Its average velocity over this interval (constant acceleration) is:",
          options: ["15 m/s", "20 m/s", "25 m/s", "40 m/s"],
          answer: 1,
          explanation: "For uniform acceleration, v_avg = (u + v)/2 = 20 m/s.",
        },
      ],
      advanced: [
        {
          q: "A particle moves along x-axis with velocity v = 3x² (SI units). Its acceleration at x = 1 m is:",
          options: ["6 m/s²", "9 m/s²", "18 m/s²", "3 m/s²"],
          answer: 2,
          explanation: "a = v dv/dx = (3x²)(6x) = 18x³ = 18 m/s² at x = 1.",
        },
        {
          q: "A projectile is fired at 60° with speed u. At the highest point its speed is:",
          options: ["u", "u/2", "u√3/2", "0"],
          answer: 1,
          explanation: "At the top only horizontal component remains: u cos60° = u/2.",
        },
        {
          q: "Rain falls vertically at 10 m/s. A man runs at 10 m/s horizontally. To keep dry he should hold his umbrella at (from vertical):",
          options: ["30° forward", "45° forward", "60° forward", "45° backward"],
          answer: 1,
          explanation: "Relative velocity of rain has equal horizontal and vertical parts ⇒ tanθ = 1 ⇒ 45° toward direction of motion.",
        },
        {
          q: "Two balls are dropped from heights h and 4h. The ratio of their times of fall is:",
          options: ["1 : 2", "1 : 4", "2 : 1", "1 : √2"],
          answer: 0,
          explanation: "t ∝ √h ⇒ t₁/t₂ = √(h/4h) = 1/2.",
        },
        {
          q: "A boat crosses a 100 m wide river with speed 5 m/s relative to water; river flows at 3 m/s. Minimum crossing time is:",
          options: ["20 s", "25 s", "33.3 s", "12.5 s"],
          answer: 0,
          explanation: "Minimum time when boat heads perpendicular to banks: t = d/v_boat = 100/5 = 20 s.",
        },
      ],
    },
  },
  {
    id: "laws-of-motion",
    subject: "physics",
    title: "Laws of Motion & Friction",
    description: "Newton's laws, pseudo forces, friction, circular motion",
    questions: {
      main: [
        {
          q: "A block of mass 2 kg is pushed on a rough floor (μ = 0.5) with a horizontal force of 20 N. Its acceleration is (g = 10 m/s²):",
          options: ["5 m/s²", "10 m/s²", "2.5 m/s²", "0"],
          answer: 0,
          explanation: "Friction = μmg = 10 N. Net force = 10 N ⇒ a = 10/2 = 5 m/s².",
        },
        {
          q: "A lift accelerates upward at g/2. Apparent weight of a person of mass m is:",
          options: ["mg/2", "mg", "3mg/2", "2mg"],
          answer: 2,
          explanation: "N − mg = m(g/2) ⇒ N = 3mg/2.",
        },
        {
          q: "The angle of repose on an inclined plane equals:",
          options: ["tan⁻¹(μ)", "sin⁻¹(μ)", "cos⁻¹(μ)", "cot⁻¹(μ)"],
          answer: 0,
          explanation: "At the angle of repose, mg sinθ = μ mg cosθ ⇒ tanθ = μ.",
        },
        {
          q: "A body moving in a circle at constant speed has:",
          options: ["Zero acceleration", "Acceleration along tangent", "Acceleration toward centre", "Acceleration away from centre"],
          answer: 2,
          explanation: "Uniform circular motion has centripetal acceleration v²/r directed toward the centre.",
        },
        {
          q: "Two masses 3 kg and 2 kg hang from a light string over a smooth pulley. Acceleration of the system is (g = 10 m/s²):",
          options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²"],
          answer: 1,
          explanation: "a = (m₁ − m₂)g/(m₁ + m₂) = (1)(10)/5 = 2 m/s².",
        },
      ],
      advanced: [
        {
          q: "A block rests on a rough incline of angle 30°. Minimum μ to prevent slipping is:",
          options: ["1/√3", "√3", "1/2", "√3/2"],
          answer: 0,
          explanation: "μ_min = tan30° = 1/√3.",
        },
        {
          q: "A car takes a turn of radius 50 m on a level road with μ = 0.5. Maximum safe speed is (g = 10 m/s²):",
          options: ["5√10 m/s", "25 m/s", "10 m/s", "50 m/s"],
          answer: 0,
          explanation: "v_max = √(μrg) = √(0.5 × 50 × 10) = √250 = 5√10 m/s.",
        },
        {
          q: "A block of mass m is on a smooth wedge of mass M on a smooth floor. When released, the wedge moves. The system's horizontal momentum is:",
          options: ["Always zero", "Increases with time", "Equals mg t", "Depends on the incline angle"],
          answer: 0,
          explanation: "No external horizontal force acts ⇒ horizontal momentum is conserved and stays zero.",
        },
        {
          q: "Coefficient of static friction is 0.4 and kinetic is 0.3 for a 10 kg block. Force needed to just move it vs. to keep it moving uniformly (g = 10):",
          options: ["40 N and 30 N", "30 N and 40 N", "40 N and 40 N", "30 N and 30 N"],
          answer: 0,
          explanation: "Limiting static friction = 0.4×100 = 40 N; kinetic = 0.3×100 = 30 N.",
        },
        {
          q: "A pendulum bob in a car accelerating at a (horizontal) makes an angle θ with the vertical in equilibrium. Then tanθ =",
          options: ["g/a", "a/g", "a/(g+a)", "√(a/g)"],
          answer: 1,
          explanation: "In the car frame, pseudo force ma acts backward: tanθ = ma/mg = a/g.",
        },
      ],
    },
  },
  {
    id: "electrostatics",
    subject: "physics",
    title: "Electrostatics",
    description: "Coulomb's law, field, potential, capacitors",
    questions: {
      main: [
        {
          q: "If the distance between two point charges is doubled, the electrostatic force becomes:",
          options: ["Half", "One-fourth", "Double", "Four times"],
          answer: 1,
          explanation: "F ∝ 1/r². Doubling r makes F one-fourth.",
        },
        {
          q: "Electric field inside a charged conducting sphere is:",
          options: ["Zero", "Constant non-zero", "Proportional to r", "Proportional to 1/r²"],
          answer: 0,
          explanation: "In electrostatic equilibrium, the field inside a conductor is zero.",
        },
        {
          q: "The SI unit of electric potential is:",
          options: ["N/C", "J/C", "C/J", "V/m"],
          answer: 1,
          explanation: "Potential = work per unit charge = J/C = volt.",
        },
        {
          q: "Two capacitors of 2 μF and 4 μF are connected in series. The equivalent capacitance is:",
          options: ["6 μF", "8/3 μF", "4/3 μF", "2 μF"],
          answer: 2,
          explanation: "1/C = 1/2 + 1/4 = 3/4 ⇒ C = 4/3 μF.",
        },
        {
          q: "Work done in moving a charge along an equipotential surface is:",
          options: ["Positive", "Negative", "Zero", "Depends on the charge"],
          answer: 2,
          explanation: "No potential difference ⇒ W = qΔV = 0.",
        },
      ],
      advanced: [
        {
          q: "Electric field on the axis of a uniformly charged ring (radius R, charge Q) is maximum at distance x =",
          options: ["R", "R/√2", "R√2", "0"],
          answer: 1,
          explanation: "E = kQx/(R²+x²)^{3/2}; dE/dx = 0 gives x = R/√2.",
        },
        {
          q: "A capacitor is charged and disconnected from the battery. A dielectric of constant K is then inserted. The stored energy becomes:",
          options: ["K times", "1/K times", "Unchanged", "K² times"],
          answer: 1,
          explanation: "Q is fixed; U = Q²/2C and C → KC ⇒ U → U/K.",
        },
        {
          q: "Two identical conducting spheres carry charges +3q and −q. They are touched together and separated. The force between them compared to before (magnitude):",
          options: ["1/3", "1/2", "3", "Same"],
          answer: 0,
          explanation: "After contact each has +q. Force ratio = (q·q)/(3q·q) = 1/3.",
        },
        {
          q: "Potential at the centre of a uniformly charged thin spherical shell of radius R and charge Q is:",
          options: ["0", "kQ/R", "kQ/2R", "Infinite"],
          answer: 1,
          explanation: "Inside a shell the potential is constant and equal to the surface value kQ/R.",
        },
        {
          q: "An electric dipole of moment p is placed in a uniform field E at angle θ. The torque is maximum when θ =",
          options: ["0°", "45°", "90°", "180°"],
          answer: 2,
          explanation: "τ = pE sinθ is maximum at θ = 90°.",
        },
      ],
    },
  },
  {
    id: "current-electricity",
    subject: "physics",
    title: "Current Electricity",
    description: "Ohm's law, Kirchhoff's rules, cells, Wheatstone bridge",
    questions: {
      main: [
        {
          q: "A wire is stretched to double its length. Its resistance becomes:",
          options: ["Double", "Half", "Four times", "One-fourth"],
          answer: 2,
          explanation: "Volume constant ⇒ A halves as L doubles. R = ρL/A becomes 4R.",
        },
        {
          q: "Three resistors of 6 Ω each are connected in parallel. Equivalent resistance is:",
          options: ["18 Ω", "2 Ω", "6 Ω", "3 Ω"],
          answer: 1,
          explanation: "R_eq = 6/3 = 2 Ω.",
        },
        {
          q: "Kirchhoff's junction rule is a consequence of conservation of:",
          options: ["Energy", "Momentum", "Charge", "Mass"],
          answer: 2,
          explanation: "Net current into a junction is zero because charge is conserved.",
        },
        {
          q: "A 60 W bulb operates at 240 V. Its resistance is:",
          options: ["4 Ω", "240 Ω", "960 Ω", "14400 Ω"],
          answer: 2,
          explanation: "R = V²/P = 240²/60 = 960 Ω.",
        },
        {
          q: "The resistivity of a metal conductor with increasing temperature:",
          options: ["Decreases", "Increases", "Stays constant", "Becomes zero"],
          answer: 1,
          explanation: "For metals, resistivity increases with temperature due to more electron–lattice collisions.",
        },
      ],
      advanced: [
        {
          q: "A cell of emf E and internal resistance r delivers maximum power to an external resistance R when:",
          options: ["R = 0", "R = r", "R = 2r", "R → ∞"],
          answer: 1,
          explanation: "P = E²R/(R+r)² is maximum at R = r (maximum power transfer theorem).",
        },
        {
          q: "In a balanced Wheatstone bridge, the current through the galvanometer is:",
          options: ["Maximum", "Zero", "Equal to the cell current", "Half the cell current"],
          answer: 1,
          explanation: "At balance the galvanometer junctions are at the same potential ⇒ no current.",
        },
        {
          q: "Two cells of emf 2 V and 4 V with internal resistances 1 Ω each are connected in parallel (like poles together). The equivalent emf is:",
          options: ["6 V", "2 V", "3 V", "4 V"],
          answer: 2,
          explanation: "E_eq = (E₁/r₁ + E₂/r₂)/(1/r₁ + 1/r₂) = (2 + 4)/2 = 3 V.",
        },
        {
          q: "A potentiometer wire of 10 m has a potential gradient of 0.1 V/m. A cell balances at 4.5 m. Its emf is:",
          options: ["0.45 V", "4.5 V", "1 V", "0.1 V"],
          answer: 0,
          explanation: "emf = gradient × balancing length = 0.1 × 4.5 = 0.45 V.",
        },
        {
          q: "Drift velocity of electrons in a conductor of cross-section A carrying current I is (n = electron density):",
          options: ["I/(neA)", "neA/I", "I·neA", "nA/(eI)"],
          answer: 0,
          explanation: "I = neAv_d ⇒ v_d = I/(neA).",
        },
      ],
    },
  },

  // ---------------- CHEMISTRY ----------------
  {
    id: "mole-concept",
    subject: "chemistry",
    title: "Mole Concept & Stoichiometry",
    description: "Moles, molar mass, limiting reagent, concentration",
    questions: {
      main: [
        {
          q: "Number of moles in 22 g of CO₂ (C = 12, O = 16) is:",
          options: ["0.5", "1", "2", "0.25"],
          answer: 0,
          explanation: "Molar mass = 44 g/mol; 22/44 = 0.5 mol.",
        },
        {
          q: "Volume occupied by 1 mole of an ideal gas at STP (0 °C, 1 bar) is approximately:",
          options: ["22.4 L", "22.7 L", "24 L", "11.2 L"],
          answer: 1,
          explanation: "At 1 bar and 273 K, molar volume ≈ 22.7 L (22.4 L at 1 atm).",
        },
        {
          q: "Molarity of a solution containing 4 g NaOH in 500 mL water (NaOH = 40) is:",
          options: ["0.1 M", "0.2 M", "0.4 M", "0.05 M"],
          answer: 1,
          explanation: "Moles = 0.1; M = 0.1/0.5 L = 0.2 M.",
        },
        {
          q: "In 2H₂ + O₂ → 2H₂O, if 4 mol H₂ react with 1 mol O₂, the limiting reagent is:",
          options: ["H₂", "O₂", "Both", "Neither"],
          answer: 1,
          explanation: "1 mol O₂ needs only 2 mol H₂; O₂ is exhausted first.",
        },
        {
          q: "Mass percent of oxygen in H₂O is approximately:",
          options: ["11%", "50%", "89%", "33%"],
          answer: 2,
          explanation: "16/18 × 100 ≈ 88.9%.",
        },
      ],
      advanced: [
        {
          q: "10 mL of a gaseous hydrocarbon needs 40 mL O₂ for complete combustion and produces 30 mL CO₂ (same conditions). The hydrocarbon is:",
          options: ["C₂H₆", "C₃H₄", "C₃H₈", "C₃H₆"],
          answer: 1,
          explanation: "x = 3 (30/10). CₓHᵧ + (x + y/4)O₂: 3 + y/4 = 4 ⇒ y = 4 ⇒ C₃H₄.",
        },
        {
          q: "The number of atoms in 0.1 mol of P₄ molecules is:",
          options: ["6.022 × 10²²", "2.409 × 10²³", "6.022 × 10²³", "1.5 × 10²²"],
          answer: 1,
          explanation: "0.1 × 4 × 6.022 × 10²³ = 2.409 × 10²³ atoms.",
        },
        {
          q: "Molality of a 10% (w/w) NaOH solution (NaOH = 40) is approximately:",
          options: ["2.5 m", "2.78 m", "0.25 m", "10 m"],
          answer: 1,
          explanation: "10 g in 90 g water: 0.25 mol / 0.090 kg ≈ 2.78 m.",
        },
        {
          q: "A metal oxide contains 60% metal by mass. Equivalent mass of the metal is:",
          options: ["12", "8", "24", "16"],
          answer: 0,
          explanation: "60 g metal combines with 40 g O. Eq. mass = 60 × 8 / 40 = 12.",
        },
        {
          q: "20 mL of 0.1 M H₂SO₄ is neutralised by 0.1 M NaOH. Volume of NaOH required is:",
          options: ["10 mL", "20 mL", "40 mL", "80 mL"],
          answer: 2,
          explanation: "H₂SO₄ is diprotic: mol NaOH = 2 × 0.002 = 0.004 ⇒ V = 40 mL.",
        },
      ],
    },
  },
  {
    id: "chemical-bonding",
    subject: "chemistry",
    title: "Chemical Bonding",
    description: "VSEPR, hybridisation, MOT, polarity",
    questions: {
      main: [
        {
          q: "The shape of the NH₃ molecule is:",
          options: ["Trigonal planar", "Tetrahedral", "Trigonal pyramidal", "Linear"],
          answer: 2,
          explanation: "N has 3 bond pairs + 1 lone pair ⇒ trigonal pyramidal (VSEPR).",
        },
        {
          q: "Hybridisation of carbon in ethyne (C₂H₂) is:",
          options: ["sp", "sp²", "sp³", "sp³d"],
          answer: 0,
          explanation: "Each C forms a triple bond and one single bond ⇒ 2 sigma bonds ⇒ sp.",
        },
        {
          q: "Which molecule has a zero dipole moment?",
          options: ["H₂O", "NH₃", "CO₂", "HCl"],
          answer: 2,
          explanation: "CO₂ is linear and symmetric; bond dipoles cancel.",
        },
        {
          q: "Bond order of O₂ molecule according to MOT is:",
          options: ["1", "1.5", "2", "3"],
          answer: 2,
          explanation: "Bond order = (10 − 6)/2 = 2.",
        },
        {
          q: "Which has the highest lattice energy?",
          options: ["NaCl", "KCl", "MgO", "CaO"],
          answer: 2,
          explanation: "MgO has ±2 charges and small ionic radii ⇒ strongest attraction.",
        },
      ],
      advanced: [
        {
          q: "The species with the same bond order as N₂ is:",
          options: ["O₂", "CO", "NO", "O₂⁻"],
          answer: 1,
          explanation: "CO is isoelectronic with N₂ (14 electrons) and has bond order 3.",
        },
        {
          q: "Number of lone pairs on the central atom in XeF₄ is:",
          options: ["0", "1", "2", "3"],
          answer: 2,
          explanation: "Xe has 8 valence electrons; 4 used in bonds ⇒ 2 lone pairs, square planar.",
        },
        {
          q: "Which of the following is paramagnetic?",
          options: ["N₂", "O₂²⁻", "O₂⁺", "F₂"],
          answer: 2,
          explanation: "O₂⁺ has one unpaired electron in π* orbital ⇒ paramagnetic.",
        },
        {
          q: "Correct order of bond angle:",
          options: ["H₂O > NH₃ > CH₄", "CH₄ > NH₃ > H₂O", "NH₃ > CH₄ > H₂O", "H₂O > CH₄ > NH₃"],
          answer: 1,
          explanation: "Lone pair repulsion reduces bond angle: CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°).",
        },
        {
          q: "In SF₆, the hybridisation of sulphur is:",
          options: ["sp³", "sp³d", "sp³d²", "sp³d³"],
          answer: 2,
          explanation: "6 bond pairs, no lone pairs ⇒ sp³d², octahedral.",
        },
      ],
    },
  },
  {
    id: "equilibrium",
    subject: "chemistry",
    title: "Chemical & Ionic Equilibrium",
    description: "Kc/Kp, Le Chatelier, pH, buffers, solubility",
    questions: {
      main: [
        {
          q: "For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure shifts the equilibrium:",
          options: ["Forward", "Backward", "No change", "Cannot say"],
          answer: 0,
          explanation: "Fewer moles of gas on the product side ⇒ higher pressure favours forward reaction.",
        },
        {
          q: "pH of a 0.01 M HCl solution is:",
          options: ["1", "2", "12", "0.01"],
          answer: 1,
          explanation: "pH = −log(10⁻²) = 2.",
        },
        {
          q: "The relation between Kp and Kc is Kp = Kc(RT)^Δn. For Δn = 0:",
          options: ["Kp > Kc", "Kp < Kc", "Kp = Kc", "Kp = 1"],
          answer: 2,
          explanation: "(RT)⁰ = 1 ⇒ Kp = Kc.",
        },
        {
          q: "A catalyst added to an equilibrium mixture:",
          options: ["Increases K", "Decreases K", "Shifts equilibrium forward", "Does not change K"],
          answer: 3,
          explanation: "A catalyst speeds both directions equally; K is unaffected.",
        },
        {
          q: "The conjugate base of HSO₄⁻ is:",
          options: ["H₂SO₄", "SO₄²⁻", "H₃O⁺", "OH⁻"],
          answer: 1,
          explanation: "Removing a proton from HSO₄⁻ gives SO₄²⁻.",
        },
      ],
      advanced: [
        {
          q: "For an exothermic reaction at equilibrium, increasing temperature:",
          options: ["Increases K", "Decreases K", "Leaves K unchanged", "Increases yield"],
          answer: 1,
          explanation: "By van't Hoff equation, K decreases with T for ΔH < 0.",
        },
        {
          q: "pH of a buffer containing 0.1 M CH₃COOH and 0.1 M CH₃COONa (pKa = 4.74) is:",
          options: ["4.74", "5.74", "3.74", "7"],
          answer: 0,
          explanation: "pH = pKa + log([salt]/[acid]) = 4.74 + log1 = 4.74.",
        },
        {
          q: "Solubility product of AgCl is 1 × 10⁻¹⁰. Its solubility in pure water is:",
          options: ["10⁻¹⁰ M", "10⁻⁵ M", "10⁻²⁰ M", "2 × 10⁻⁵ M"],
          answer: 1,
          explanation: "Ksp = s² ⇒ s = 10⁻⁵ M.",
        },
        {
          q: "Degree of dissociation of a 0.01 M weak acid with Ka = 10⁻⁶ is approximately:",
          options: ["10⁻²", "10⁻³", "10⁻⁴", "10⁻¹"],
          answer: 0,
          explanation: "α = √(Ka/C) = √(10⁻⁶/10⁻²) = 10⁻².",
        },
        {
          q: "For PCl₅ ⇌ PCl₃ + Cl₂ at equilibrium, adding inert gas at constant volume:",
          options: ["Shifts forward", "Shifts backward", "No shift", "Increases K"],
          answer: 2,
          explanation: "At constant volume partial pressures of reacting species are unchanged ⇒ no shift.",
        },
      ],
    },
  },
  {
    id: "organic-basics",
    subject: "chemistry",
    title: "GOC & Hydrocarbons",
    description: "Electronic effects, stability, isomerism, reactions",
    questions: {
      main: [
        {
          q: "Which is the most stable carbocation?",
          options: ["CH₃⁺", "(CH₃)₂CH⁺", "(CH₃)₃C⁺", "CH₃CH₂⁺"],
          answer: 2,
          explanation: "Tertiary carbocation is stabilised by +I effect and hyperconjugation from 3 alkyl groups.",
        },
        {
          q: "IUPAC name of CH₃–CH(CH₃)–CH₂–CH₃ is:",
          options: ["2-methylbutane", "3-methylbutane", "Pentane", "Isobutane"],
          answer: 0,
          explanation: "Longest chain of 4 carbons with methyl on C2 ⇒ 2-methylbutane.",
        },
        {
          q: "Number of structural isomers of C₄H₁₀ is:",
          options: ["1", "2", "3", "4"],
          answer: 1,
          explanation: "n-butane and isobutane (2-methylpropane).",
        },
        {
          q: "Markovnikov addition of HBr to propene gives mainly:",
          options: ["1-bromopropane", "2-bromopropane", "1,2-dibromopropane", "Propane"],
          answer: 1,
          explanation: "H attaches to the carbon with more H atoms; Br to the more substituted carbon.",
        },
        {
          q: "The –NO₂ group shows which effect on a benzene ring?",
          options: ["+I", "+M", "−M", "Hyperconjugation"],
          answer: 2,
          explanation: "Nitro is strongly electron-withdrawing by resonance (−M) and induction (−I).",
        },
      ],
      advanced: [
        {
          q: "Which compound is aromatic?",
          options: ["Cyclobutadiene", "Cyclooctatetraene", "Cyclopentadienyl anion", "Cyclopropenyl anion"],
          answer: 2,
          explanation: "C₅H₅⁻ is planar, cyclic, conjugated with 6 π electrons (Hückel 4n+2).",
        },
        {
          q: "Number of stereoisomers of CH₃–CH(OH)–CH(OH)–CH₃ (2,3-butanediol):",
          options: ["2", "3", "4", "1"],
          answer: 1,
          explanation: "Two identical stereocentres ⇒ one meso + one pair of enantiomers = 3.",
        },
        {
          q: "Ozonolysis of 2-butene (with Zn/H₂O) gives:",
          options: ["Acetaldehyde only", "Formaldehyde only", "Acetaldehyde and formaldehyde", "Acetic acid"],
          answer: 0,
          explanation: "The C=C is cleaved symmetrically; each CH₃CH= gives CH₃CHO.",
        },
        {
          q: "Correct order of acidic strength:",
          options: ["Ethane > Ethene > Ethyne", "Ethyne > Ethene > Ethane", "Ethene > Ethyne > Ethane", "All equal"],
          answer: 1,
          explanation: "sp carbon holds the negative charge best ⇒ ethyne most acidic.",
        },
        {
          q: "Anti-Markovnikov addition of HBr to an alkene occurs in the presence of:",
          options: ["H₂SO₄", "Peroxides", "Light only", "AlCl₃"],
          answer: 1,
          explanation: "Peroxides initiate a free-radical mechanism (Kharasch effect).",
        },
      ],
    },
  },

  // ---------------- MATHEMATICS ----------------
  {
    id: "quadratic",
    subject: "maths",
    title: "Quadratic Equations",
    description: "Roots, discriminant, Vieta's relations, location of roots",
    questions: {
      main: [
        {
          q: "If the roots of x² − 5x + k = 0 are equal, then k =",
          options: ["25", "25/4", "5", "5/2"],
          answer: 1,
          explanation: "D = 25 − 4k = 0 ⇒ k = 25/4.",
        },
        {
          q: "Sum of the roots of 2x² + 3x − 5 = 0 is:",
          options: ["3/2", "−3/2", "5/2", "−5/2"],
          answer: 1,
          explanation: "Sum = −b/a = −3/2.",
        },
        {
          q: "If α, β are roots of x² − 3x + 2 = 0, then α² + β² =",
          options: ["5", "9", "13", "1"],
          answer: 0,
          explanation: "α² + β² = (α+β)² − 2αβ = 9 − 4 = 5.",
        },
        {
          q: "The equation x² + x + 1 = 0 has:",
          options: ["Two real roots", "One real root", "No real roots", "Infinite roots"],
          answer: 2,
          explanation: "D = 1 − 4 = −3 < 0 ⇒ complex roots.",
        },
        {
          q: "A quadratic with roots 2 and −3 is:",
          options: ["x² + x − 6", "x² − x − 6", "x² + x + 6", "x² − x + 6"],
          answer: 0,
          explanation: "x² − (sum)x + product = x² − (−1)x + (−6) = x² + x − 6.",
        },
      ],
      advanced: [
        {
          q: "If both roots of x² − 2kx + k² − 1 = 0 lie in (−2, 4), then k lies in:",
          options: ["(−1, 3)", "(−2, 4)", "(−3, 5)", "[−1, 3]"],
          answer: 0,
          explanation: "Roots are k ± 1. Need −2 < k−1 and k+1 < 4 ⇒ −1 < k < 3.",
        },
        {
          q: "Number of real roots of x² − |x| − 2 = 0 is:",
          options: ["0", "1", "2", "4"],
          answer: 2,
          explanation: "Let t = |x| ≥ 0: t² − t − 2 = 0 ⇒ t = 2 (t = −1 rejected) ⇒ x = ±2.",
        },
        {
          q: "If α, β are roots of x² + px + q = 0 and α², β² are roots of x² − rx + s = 0, then r =",
          options: ["p² − 2q", "p² + 2q", "q² − 2p", "2q − p²"],
          answer: 0,
          explanation: "r = α² + β² = (α+β)² − 2αβ = p² − 2q.",
        },
        {
          q: "The minimum value of x² − 6x + 13 is:",
          options: ["4", "13", "−4", "9"],
          answer: 0,
          explanation: "x² − 6x + 13 = (x−3)² + 4 ≥ 4.",
        },
        {
          q: "If x² + ax + 3 = 0 and x² + 3x + a = 0 (a ≠ 3) have a common root, then a =",
          options: ["−4", "4", "3", "−3"],
          answer: 0,
          explanation: "Subtracting: (a−3)x + (3−a) = 0 ⇒ x = 1. Substitute: 1 + a + 3 = 0 ⇒ a = −4.",
        },
      ],
    },
  },
  {
    id: "sequences",
    subject: "maths",
    title: "Sequences & Series",
    description: "AP, GP, HP, sums, AM–GM inequality",
    questions: {
      main: [
        {
          q: "The 10th term of the AP 3, 7, 11, … is:",
          options: ["39", "43", "40", "36"],
          answer: 0,
          explanation: "a₁₀ = 3 + 9×4 = 39.",
        },
        {
          q: "Sum of first n natural numbers is:",
          options: ["n²", "n(n+1)/2", "n(n−1)/2", "n(n+1)"],
          answer: 1,
          explanation: "Standard result: 1 + 2 + … + n = n(n+1)/2.",
        },
        {
          q: "Sum to infinity of the GP 1 + 1/2 + 1/4 + … is:",
          options: ["1", "2", "3/2", "∞"],
          answer: 1,
          explanation: "S = a/(1−r) = 1/(1−1/2) = 2.",
        },
        {
          q: "If a, b, c are in GP, then b² =",
          options: ["a + c", "ac", "2ac", "(a + c)/2"],
          answer: 1,
          explanation: "Geometric mean: b² = ac.",
        },
        {
          q: "The AM of two positive numbers is 5 and GM is 4. The numbers are:",
          options: ["2 and 8", "4 and 6", "1 and 9", "3 and 7"],
          answer: 0,
          explanation: "a + b = 10, ab = 16 ⇒ roots of x² − 10x + 16 = 0 ⇒ 2, 8.",
        },
      ],
      advanced: [
        {
          q: "Sum of the series 1·2 + 2·3 + 3·4 + … + n(n+1) is:",
          options: ["n(n+1)(n+2)/3", "n(n+1)(2n+1)/6", "n(n+1)/2", "n(n+1)(n+2)/6"],
          answer: 0,
          explanation: "Σ(k² + k) = n(n+1)(2n+1)/6 + n(n+1)/2 = n(n+1)(n+2)/3.",
        },
        {
          q: "If the pth, qth, rth terms of a GP are a, b, c, then a^(q−r) · b^(r−p) · c^(p−q) =",
          options: ["0", "1", "abc", "a + b + c"],
          answer: 1,
          explanation: "Substituting a = AR^(p−1) etc., all exponents cancel to give 1.",
        },
        {
          q: "For positive x, the minimum value of x + 1/x is:",
          options: ["0", "1", "2", "4"],
          answer: 2,
          explanation: "AM ≥ GM: (x + 1/x)/2 ≥ 1 ⇒ x + 1/x ≥ 2.",
        },
        {
          q: "Sum of the infinite series 1 + 2x + 3x² + 4x³ + … for |x| < 1 is:",
          options: ["1/(1−x)", "1/(1−x)²", "x/(1−x)²", "1/(1+x)²"],
          answer: 1,
          explanation: "It is the derivative of Σxⁿ = 1/(1−x), giving 1/(1−x)².",
        },
        {
          q: "If 1/a, 1/b, 1/c are in AP, then a, b, c are in:",
          options: ["AP", "GP", "HP", "None"],
          answer: 2,
          explanation: "Reciprocals in AP defines a harmonic progression.",
        },
      ],
    },
  },
  {
    id: "calculus-limits",
    subject: "maths",
    title: "Limits, Continuity & Derivatives",
    description: "Standard limits, L'Hôpital, differentiability, tangents",
    questions: {
      main: [
        {
          q: "lim (x→0) sin(3x)/x =",
          options: ["0", "1", "3", "1/3"],
          answer: 2,
          explanation: "sin(3x)/x = 3·sin(3x)/(3x) → 3.",
        },
        {
          q: "d/dx (x³ + 2x) at x = 1 is:",
          options: ["3", "5", "2", "4"],
          answer: 1,
          explanation: "3x² + 2 = 5 at x = 1.",
        },
        {
          q: "lim (x→∞) (2x² + 1)/(x² − 3) =",
          options: ["0", "1", "2", "∞"],
          answer: 2,
          explanation: "Ratio of leading coefficients = 2.",
        },
        {
          q: "The derivative of ln(x²) is:",
          options: ["1/x²", "2/x", "2x", "1/(2x)"],
          answer: 1,
          explanation: "ln(x²) = 2 ln x ⇒ derivative 2/x.",
        },
        {
          q: "The function f(x) = |x| is:",
          options: ["Differentiable everywhere", "Not continuous at 0", "Continuous but not differentiable at 0", "Discontinuous everywhere"],
          answer: 2,
          explanation: "|x| is continuous at 0 but left and right derivatives differ (−1 and 1).",
        },
      ],
      advanced: [
        {
          q: "lim (x→0) (1 − cos x)/x² =",
          options: ["0", "1", "1/2", "2"],
          answer: 2,
          explanation: "1 − cos x = 2sin²(x/2) ⇒ limit = 2 × (1/4) = 1/2.",
        },
        {
          q: "lim (x→0) (eˣ − 1 − x)/x² =",
          options: ["0", "1", "1/2", "1/6"],
          answer: 2,
          explanation: "Expand: eˣ = 1 + x + x²/2 + … ⇒ limit = 1/2.",
        },
        {
          q: "If f(x) = x² sin(1/x) for x ≠ 0 and f(0) = 0, then f'(0) =",
          options: ["Does not exist", "0", "1", "−1"],
          answer: 1,
          explanation: "f'(0) = lim h·sin(1/h) = 0 by squeeze theorem.",
        },
        {
          q: "lim (x→0) (1 + 2x)^(1/x) =",
          options: ["e", "e²", "1", "2"],
          answer: 1,
          explanation: "Standard form (1 + ax)^(1/x) → e^a with a = 2.",
        },
        {
          q: "The slope of the tangent to y = x³ − 3x at its point of local minimum is:",
          options: ["3", "−3", "0", "6"],
          answer: 2,
          explanation: "At any extremum the derivative (slope) is zero.",
        },
      ],
    },
  },
  {
    id: "coordinate-geometry",
    subject: "maths",
    title: "Straight Lines & Circles",
    description: "Slopes, distance, tangents, circle equations",
    questions: {
      main: [
        {
          q: "Slope of the line 3x − 4y + 7 = 0 is:",
          options: ["3/4", "−3/4", "4/3", "−4/3"],
          answer: 0,
          explanation: "y = (3/4)x + 7/4 ⇒ slope 3/4.",
        },
        {
          q: "Distance of the point (3, 4) from the origin is:",
          options: ["7", "5", "1", "√7"],
          answer: 1,
          explanation: "√(9 + 16) = 5.",
        },
        {
          q: "The radius of the circle x² + y² − 6x + 8y = 0 is:",
          options: ["5", "10", "25", "√7"],
          answer: 0,
          explanation: "Centre (3, −4); r = √(9 + 16 − 0) = 5.",
        },
        {
          q: "Two lines with slopes m₁ and m₂ are perpendicular if:",
          options: ["m₁ = m₂", "m₁ + m₂ = 0", "m₁m₂ = −1", "m₁m₂ = 1"],
          answer: 2,
          explanation: "Perpendicular lines satisfy m₁m₂ = −1.",
        },
        {
          q: "The midpoint of (2, −1) and (−4, 5) is:",
          options: ["(−1, 2)", "(1, −2)", "(−2, 4)", "(3, 2)"],
          answer: 0,
          explanation: "((2−4)/2, (−1+5)/2) = (−1, 2).",
        },
      ],
      advanced: [
        {
          q: "Length of the tangent from (5, 1) to the circle x² + y² = 9 is:",
          options: ["√17", "√26", "4", "5"],
          answer: 0,
          explanation: "L = √(S₁) = √(25 + 1 − 9) = √17.",
        },
        {
          q: "The line y = mx + c touches x² + y² = a² if:",
          options: ["c² = a²(1 + m²)", "c = a", "c² = a²m²", "c² = a²(1 − m²)"],
          answer: 0,
          explanation: "Perpendicular distance from origin equals radius: |c|/√(1+m²) = a.",
        },
        {
          q: "Two circles x² + y² = 4 and (x−3)² + y² = 1 are:",
          options: ["Intersecting", "Touching externally", "Touching internally", "Non-intersecting"],
          answer: 1,
          explanation: "Distance between centres = 3 = r₁ + r₂ = 2 + 1 ⇒ external touch.",
        },
        {
          q: "Area of the triangle formed by the line x/3 + y/4 = 1 with the axes is:",
          options: ["6", "12", "7", "3.5"],
          answer: 0,
          explanation: "Intercepts 3 and 4 ⇒ area = (1/2)(3)(4) = 6.",
        },
        {
          q: "The radical axis of the circles x² + y² − 4 = 0 and x² + y² − 6x + 5 = 0 is:",
          options: ["2x − 3 = 0", "2x + 3 = 0", "3x − 2 = 0", "x − 3 = 0"],
          answer: 0,
          explanation: "S₁ − S₂ = 0 ⇒ 6x − 9 = 0 ⇒ 2x − 3 = 0.",
        },
      ],
    },
  },
];
