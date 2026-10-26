/* Study material — readable notes for Chemistry Ch 13-16, built from the uploaded
   CHEM131 Ch 13-16 Visual Study Guide + Formula Guide.
   Each entry can link to a quiz section via practiceSub (must match a question "sub").
   Schema: { id, title, sub, practiceSub, sections:[{ h, items:[strings] }] } */
window.STUDY_DATA = [

{ id:"S13", title:"Ch 13 - Organic Structures & Addition", sub:"Chapter 13",
  practiceSub:"Ch 13: Organic Structures & Addition", sections:[
  { h:"Recognize the carbon skeleton", items:[
    "Alkane: only C-C single bonds (saturated). Low polarity, poor water solubility.",
    "Alkene: has a C=C double bond. Reacts by addition.",
    "Alkyne: has a C#C triple bond. Reacts by addition.",
    "Aromatic: a benzene-like ring with delocalized pi electrons.",
    "Drawing trick: every line end or bend is a carbon; add enough H so each carbon has 4 bonds." ]},
  { h:"Functional groups to recognize", items:[
    "Carbonyl = C=O (the core of aldehydes, ketones, acids, esters and amides).",
    "Without a carbonyl: alcohol (-OH), ether (C-O-C), amine (C-N with N-H), alkyl halide (C-X; X = F, Cl, Br, I), thiol (-SH).",
    "With a carbonyl: carboxylic acid (-COOH), ester (-C(=O)-O-C), amide (-C(=O)-N), aldehyde (-CHO), ketone (-CO-)." ]},
  { h:"The four addition reactions (the heart of Ch 13)", items:[
    "Halogenation: C=C + Br2 -> vicinal dibromide (a Br on each former double-bond carbon).",
    "Hydrohalogenation: C=C + HBr -> Markovnikov product (Br on the more substituted carbon).",
    "Hydrogenation: C=C + H2/Pd -> alkane (carbon skeleton unchanged).",
    "Acid hydration: C=C + H2O/H+ -> -OH on the more substituted carbon (Markovnikov)." ]},
  { h:"Properties & isomers", items:[
    "Hydrocarbons are mostly nonpolar and poorly water-soluble; an alcohol can hydrogen-bond and dissolve.",
    "cis = comparable groups on the same side of C=C; trans = opposite sides. Needs a double bond (restricted rotation); no cis/trans in rings.",
    "Structural isomers: same molecular formula, different connectivity." ]},
  { h:"Formula patterns", items:[
    "Acyclic alkane: CnH(2n+2).   One C=C: CnH(2n).   One C#C: CnH(2n-2)." ]}
]},

{ id:"S14", title:"Ch 14 - Alcohols, Oxidation, Sulfur & Chirality", sub:"Chapter 14",
  practiceSub:"Ch 14: Alcohols, Oxidation & Chirality", sections:[
  { h:"Classify the alcohol (count carbons on the OH carbon)", items:[
    "Primary (1 deg): the OH carbon is bonded to 1 other carbon.",
    "Secondary (2 deg): the OH carbon is bonded to 2 other carbons.",
    "Tertiary (3 deg): the OH carbon is bonded to 3 other carbons." ]},
  { h:"Related groups", items:[
    "Ether: an oxygen between two carbons (C-O-C).",
    "Thiol: C-SH (the sulfur version of an alcohol).",
    "Disulfide: C-S-S-C." ]},
  { h:"Oxidation & dehydration (high-priority skill)", items:[
    "1 deg alcohol + [O] -> aldehyde, then further -> carboxylic acid.",
    "2 deg alcohol + [O] -> ketone.",
    "3 deg alcohol + [O] -> no simple oxidation (no H on the OH carbon).",
    "Dehydration: alcohol - H2O (acid/heat) -> alkene (the more substituted alkene is major)." ]},
  { h:"Sulfur rule", items:[
    "2 R-SH + [O] -> R-S-S-R (a disulfide).   R-S-S-R + [H] -> 2 R-SH (back to thiols)." ]},
  { h:"Chirality", items:[
    "A chiral center is a carbon with 4 different groups.",
    "Maximum stereoisomers = 2^n (n = number of independent stereocenters). Symmetry (a meso form) can make the real count fewer.",
    "Alcohols can donate hydrogen bonds; ethers cannot." ]}
]},

{ id:"S15", title:"Ch 15 - Aldehydes, Ketones, Hemiacetals & Acetals", sub:"Chapter 15",
  practiceSub:"Ch 15: Aldehydes, Ketones & Acetals", sections:[
  { h:"Aldehyde vs ketone", items:[
    "Aldehyde: R-C(=O)-H (carbonyl at the end, with an H on the carbonyl carbon).",
    "Ketone: R-C(=O)-R (the carbonyl carbon sits between two carbons)." ]},
  { h:"Reduction and oxidation", items:[
    "Aldehyde + [H] -> primary alcohol.   Ketone + [H] -> secondary alcohol.",
    "Aldehyde + [O] -> carboxylic acid." ]},
  { h:"Hemiacetal and acetal", items:[
    "Aldehyde + 1 ROH -> hemiacetal: ONE -OH and ONE -OR on the former carbonyl carbon.",
    "Hemiacetal + a 2nd ROH -> acetal: TWO -OR groups and no -OH.",
    "Ketones give the analogous hemiketal, then ketal.",
    "A molecule with both an aldehyde and an -OH can react with itself to form a cyclic hemiacetal." ]}
]},

{ id:"S16", title:"Ch 16 - Carbohydrates", sub:"Chapter 16",
  practiceSub:"Ch 16: Carbohydrates", sections:[
  { h:"Glucose vs fructose", items:[
    "Glucose: an aldose (terminal -CHO). Fructose: a ketose (internal C=O). Both are C6H12O6.",
    "Many simple monosaccharides fit the pattern (CH2O)n." ]},
  { h:"Rings and anomers", items:[
    "Cyclization: the carbonyl plus an internal -OH forms a cyclic hemiacetal (glucose, 6-membered) or hemiketal (fructose).",
    "The former carbonyl carbon becomes the anomeric carbon.",
    "For D-glucose (Haworth): the alpha anomer has the anomeric -OH down; the beta anomer has it up.",
    "Fischer: -OH on the bottom (penultimate) chiral carbon on the right = a D sugar." ]},
  { h:"Reducing sugars & glycosidic bonds", items:[
    "A free anomeric carbon can open to a carbonyl, so the sugar is reducing. Maltose and lactose are reducing; sucrose is nonreducing.",
    "Glycosidic bond: an oxygen bridge joining two sugars. Condensation releases water; hydrolysis adds water and splits them.",
    "mono = 1 unit, di = 2 units, poly = many units." ]}
]},

{ id:"SMAP", title:"Reaction Decision Map (all chapters)", sub:"Quick review",
  practiceSub:"Draw the Product (Ch 13-16)", sections:[
  { h:"Fast if-then rules", items:[
    "C=C + Br2  -> vicinal dibromide        |   C=C + HBr -> Markovnikov bromoalkane",
    "C=C + H2/Pd -> alkane                  |   C=C + H2O/H+ -> Markovnikov alcohol",
    "1 deg alcohol + [O] -> aldehyde -> acid |  2 deg -> ketone  |  3 deg -> no reaction",
    "Aldehyde + [H] -> 1 deg alcohol         |  Ketone + [H] -> 2 deg alcohol  |  Aldehyde + [O] -> acid",
    "Aldehyde + ROH -> hemiacetal -> (+ROH) -> acetal",
    "2 R-SH + [O] -> disulfide               |  disulfide + [H] -> 2 thiols" ]},
  { h:"Before answering any question", items:[
    "1. Identify the functional groups.",
    "2. Mark the reacting carbon.",
    "3. Modify the bonds.",
    "4. Check that every carbon still has 4 bonds." ]}
]},

{ id:"SMATH", title:"Formulas & Math Summary", sub:"Quick review",
  practiceSub:"Exam Math Practice (15 problems)", sections:[
  { h:"Structural math (Ch 13-16)", items:[
    "Alkane CnH(2n+2); one C=C CnH(2n); one C#C CnH(2n-2).",
    "Maximum stereoisomers = 2^n.",
    "Glucose = C6H12O6; monosaccharide pattern (CH2O)n." ]},
  { h:"Handy general formulas", items:[
    "Temperature: K = deg C + 273.15.    Density = mass / volume.",
    "Moles: n = mass / molar mass.    Mole ratio comes from balanced coefficients.",
    "pH = -log[H3O+];  pH + pOH = 14.    Dilution: C1V1 = C2V2.    Gas: PV = nRT (R = 0.082057)." ]}
]}

];
