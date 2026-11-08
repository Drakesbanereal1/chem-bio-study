/* Reading notes, organized by subjectId / chapterId / topicId.
   Each doc: {id, subjectId, chapterId, topicId, title, overview, sections:[{h, items, fig?, figcap?}]} */
window.STUDY_DATA = [
 {
  "id": "ST_ch13_structures",
  "subjectId": "chem",
  "chapterId": "ch13",
  "topicId": "structures",
  "title": "Organic structures & addition",
  "overview": "Read line-angle structures, name the functional groups, and run the four addition reactions at the heart of Chapter 13.",
  "sections": [
   {
    "h": "Recognize the carbon skeleton",
    "items": [
     "Alkane: only C-C single bonds (saturated). Low polarity, poor water solubility.",
     "Alkene: has a C=C double bond. Reacts by addition.",
     "Alkyne: has a C#C triple bond. Reacts by addition.",
     "Aromatic: a benzene-like ring with delocalized pi electrons.",
     "Drawing trick: every line end or bend is a carbon; add enough H so each carbon has 4 bonds."
    ]
   },
   {
    "h": "Functional groups to recognize",
    "items": [
     "Carbonyl = C=O (the core of aldehydes, ketones, acids, esters and amides).",
     "Without a carbonyl: alcohol (-OH), ether (C-O-C), amine (C-N with N-H), alkyl halide (C-X; X = F, Cl, Br, I), thiol (-SH).",
     "With a carbonyl: carboxylic acid (-COOH), ester (-C(=O)-O-C), amide (-C(=O)-N), aldehyde (-CHO), ketone (-CO-)."
    ]
   },
   {
    "h": "The four addition reactions (the heart of Ch 13)",
    "items": [
     "Halogenation: C=C + Br2 -> vicinal dibromide (a Br on each former double-bond carbon).",
     "Hydrohalogenation: C=C + HBr -> Markovnikov product (Br on the more substituted carbon).",
     "Hydrogenation: C=C + H2/Pd -> alkane (carbon skeleton unchanged).",
     "Acid hydration: C=C + H2O/H+ -> -OH on the more substituted carbon (Markovnikov)."
    ]
   },
   {
    "h": "Properties & isomers",
    "items": [
     "Hydrocarbons are mostly nonpolar and poorly water-soluble; an alcohol can hydrogen-bond and dissolve.",
     "cis = comparable groups on the same side of C=C; trans = opposite sides. Needs a double bond (restricted rotation); no cis/trans in rings.",
     "Structural isomers: same molecular formula, different connectivity."
    ]
   },
   {
    "h": "Formula patterns & degree of unsaturation",
    "items": [
     "Acyclic alkane: CnH(2n+2).   One C=C: CnH(2n).   One C#C: CnH(2n-2).   Monocyclic alkane (one ring): CnH(2n).",
     "Degree of unsaturation: each ring = 1, each C=C = 1, each C#C = 2, each benzene ring = 4."
    ]
   },
   {
    "h": "Worked example & the four additions",
    "items": [
     "The four addition reactions: hydrogenation (H2, metal catalyst), halogenation (X2), hydrohalogenation (HX), and acid-catalyzed hydration (H2O / H+).",
     "Worked (Markovnikov): propene CH3CH=CH2 + HBr. H adds to the double-bond carbon that already has more H; Br adds to the other. The terminal CH2 becomes CH3; the middle CH gains Br -> CH3CHBrCH3 (2-bromopropane).",
     "Remember: number the double bond first, then track those two carbons through the addition."
    ]
   }
  ]
 },
 {
  "id": "ST_ch14_alcohols",
  "subjectId": "chem",
  "chapterId": "ch14",
  "topicId": "alcohols",
  "title": "Alcohols, oxidation & chirality",
  "overview": "Classify alcohols by the OH carbon, run oxidation and dehydration, apply the sulfur rule, and spot chiral centers.",
  "sections": [
   {
    "h": "Classify the alcohol (count carbons on the OH carbon)",
    "items": [
     "Primary (1 deg): the OH carbon is bonded to 1 other carbon.",
     "Secondary (2 deg): the OH carbon is bonded to 2 other carbons.",
     "Tertiary (3 deg): the OH carbon is bonded to 3 other carbons."
    ]
   },
   {
    "h": "Related groups",
    "items": [
     "Ether: an oxygen between two carbons (C-O-C).",
     "Thiol: C-SH (the sulfur version of an alcohol).",
     "Disulfide: C-S-S-C."
    ]
   },
   {
    "h": "Oxidation & dehydration (high-priority skill)",
    "items": [
     "1 deg alcohol + [O] -> aldehyde, then further -> carboxylic acid.",
     "2 deg alcohol + [O] -> ketone.",
     "3 deg alcohol + [O] -> no simple oxidation (no H on the OH carbon).",
     "Dehydration: alcohol - H2O (acid/heat) -> alkene (the more substituted alkene is major)."
    ]
   },
   {
    "h": "Sulfur rule",
    "items": [
     "2 R-SH + [O] -> R-S-S-R (a disulfide).   R-S-S-R + [H] -> 2 R-SH (back to thiols)."
    ]
   },
   {
    "h": "Chirality",
    "items": [
     "A chiral center is a carbon with 4 different groups.",
     "Maximum stereoisomers = 2^n (n = number of independent stereocenters). Symmetry (a meso form) can make the real count fewer.",
     "Alcohols can donate hydrogen bonds; ethers cannot."
    ]
   },
   {
    "h": "Worked example: classify then oxidize",
    "items": [
     "Classify by counting carbon neighbors on the OH carbon: 1 neighbor = primary, 2 = secondary, 3 = tertiary.",
     "Worked: CH3CH(OH)CH2CH3 + an oxidizing agent. The OH carbon has two carbon neighbors -> secondary -> oxidizes to a ketone: CH3C(=O)CH2CH3 (butan-2-one).",
     "Oxidation ladder: primary -> aldehyde -> carboxylic acid; secondary -> ketone; tertiary -> no oxidation.",
     "Remember: a chiral (stereo) center is a carbon with four different groups."
    ]
   }
  ]
 },
 {
  "id": "ST_ch15_carbonyl",
  "subjectId": "chem",
  "chapterId": "ch15",
  "topicId": "carbonyl",
  "title": "Aldehydes, ketones & acetals",
  "overview": "Tell aldehydes from ketones, follow reduction and oxidation, and build hemiacetals and acetals.",
  "sections": [
   {
    "h": "Aldehyde vs ketone",
    "items": [
     "Aldehyde: R-C(=O)-H (carbonyl at the end, with an H on the carbonyl carbon).",
     "Ketone: R-C(=O)-R (the carbonyl carbon sits between two carbons)."
    ]
   },
   {
    "h": "Reduction and oxidation",
    "items": [
     "Aldehyde + [H] -> primary alcohol.   Ketone + [H] -> secondary alcohol.",
     "Aldehyde + [O] -> carboxylic acid."
    ]
   },
   {
    "h": "Hemiacetal and acetal",
    "items": [
     "Aldehyde + 1 ROH -> hemiacetal: ONE -OH and ONE -OR on the former carbonyl carbon.",
     "Hemiacetal + a 2nd ROH -> acetal: TWO -OR groups and no -OH.",
     "Ketones give the analogous hemiketal, then ketal.",
     "A molecule with both an aldehyde and an -OH can react with itself to form a cyclic hemiacetal."
    ]
   },
   {
    "h": "Worked example: hemiacetal vs acetal",
    "items": [
     "Aldehyde carbonyl is on C1 (chain end); ketone carbonyl is internal. On reduction an aldehyde gives a primary alcohol, a ketone a secondary alcohol.",
     "Worked: ethanal CH3CHO + methanol (acid). One alcohol adds -> hemiacetal CH3CH(OH)(OCH3). With excess methanol the OH is replaced by OCH3 and water leaves -> acetal CH3CH(OCH3)2 + H2O.",
     "Remember: a hemiacetal carbon has OH + OR; an acetal carbon has two OR groups."
    ]
   }
  ]
 },
 {
  "id": "ST_ch16_carbs",
  "subjectId": "chem",
  "chapterId": "ch16",
  "topicId": "carbs",
  "title": "Carbohydrates",
  "overview": "Compare glucose and fructose, draw ring anomers, and identify reducing sugars and glycosidic bonds.",
  "sections": [
   {
    "h": "Glucose vs fructose",
    "items": [
     "Glucose: an aldose (terminal -CHO). Fructose: a ketose (internal C=O). Both are C6H12O6.",
     "Many simple monosaccharides fit the pattern (CH2O)n."
    ]
   },
   {
    "h": "Rings and anomers",
    "items": [
     "Cyclization: the carbonyl plus an internal -OH forms a cyclic hemiacetal (glucose, 6-membered) or hemiketal (fructose).",
     "The former carbonyl carbon becomes the anomeric carbon.",
     "For D-glucose (Haworth): the alpha anomer has the anomeric -OH down; the beta anomer has it up.",
     "Fischer: -OH on the bottom (penultimate) chiral carbon on the right = a D sugar."
    ]
   },
   {
    "h": "Reducing sugars & glycosidic bonds",
    "items": [
     "A free anomeric carbon can open to a carbonyl, so the sugar is reducing. Maltose and lactose are reducing; sucrose is nonreducing.",
     "Reducing-sugar tests: Benedict's gives a brick-red Cu2O precipitate; Tollens' gives a silver mirror. Both are positive for aldehydes/reducing sugars, not simple ketones.",
     "Mutarotation: the ring opens and recloses, letting the alpha and beta anomers interconvert.",
     "Reducing the carbonyl of a sugar gives a sugar alcohol.",
     "Glycosidic bond: an oxygen bridge joining two sugars. Condensation releases water; hydrolysis adds water and splits them.",
     "Joining m units forms m-1 glycosidic bonds; 2 glucose -> C12H22O11 + H2O.  mono = 1, di = 2, poly = many."
    ]
   },
   {
    "h": "Worked example: reducing sugar & anomers",
    "items": [
     "Glucose is an aldose (aldehyde); fructose is a ketose (ketone). Both are C6H12O6.",
     "Worked: maltose has an alpha(1->4) bond. C1 of the first glucose is tied up in the linkage, but the second glucose keeps a free C1 (hemiacetal) that can open to an aldehyde -> maltose is a reducing sugar.",
     "Remember: for D-glucose Haworth drawings, alpha has the anomeric OH pointing down and beta has it up."
    ]
   }
  ]
 },
 {
  "id": "ST_ch17_acids",
  "subjectId": "chem",
  "chapterId": "ch17",
  "topicId": "acids",
  "title": "Carboxylic acids",
  "overview": "A carboxylic acid is the -COOH group: a C=O and an -OH on the same carbon. It is a weak acid that loses H+ to become a carboxylate.",
  "sections": [
   {
    "h": "The three Chapter 17 families (compare first)",
    "fig": "<svg viewBox=\"0 0 600 140\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"35\" y1=\"66\" x2=\"80\" y2=\"66\"/><line x1=\"76\" y1=\"62\" x2=\"76\" y2=\"34\"/><line x1=\"84\" y1=\"62\" x2=\"84\" y2=\"34\"/><line x1=\"80\" y1=\"66\" x2=\"122\" y2=\"66\"/><line x1=\"225\" y1=\"66\" x2=\"270\" y2=\"66\"/><line x1=\"266\" y1=\"62\" x2=\"266\" y2=\"34\"/><line x1=\"274\" y1=\"62\" x2=\"274\" y2=\"34\"/><line x1=\"270\" y1=\"66\" x2=\"304\" y2=\"66\"/><line x1=\"326\" y1=\"66\" x2=\"352\" y2=\"66\"/><line x1=\"415\" y1=\"66\" x2=\"460\" y2=\"66\"/><line x1=\"456\" y1=\"62\" x2=\"456\" y2=\"34\"/><line x1=\"464\" y1=\"62\" x2=\"464\" y2=\"34\"/><line x1=\"460\" y1=\"66\" x2=\"496\" y2=\"66\"/><line x1=\"522\" y1=\"66\" x2=\"548\" y2=\"66\"/></g><g font-size=\"16\" fill=\"#1f2d3a\"><text x=\"18\" y=\"71\">R</text><text x=\"71\" y=\"28\">O</text><text x=\"126\" y=\"71\">OH</text><text x=\"208\" y=\"71\">R</text><text x=\"261\" y=\"28\">O</text><text x=\"308\" y=\"71\">O</text><text x=\"356\" y=\"71\">R</text><text x=\"398\" y=\"71\">R</text><text x=\"451\" y=\"28\">O</text><text x=\"500\" y=\"71\">N</text><text x=\"500\" y=\"90\" font-size=\"12\">H</text><text x=\"552\" y=\"71\">R</text></g><g font-size=\"13\" font-weight=\"700\" fill=\"#0f7d86\"><text x=\"18\" y=\"108\">Carboxylic acid</text><text x=\"208\" y=\"108\">Ester</text><text x=\"398\" y=\"108\">Amide</text></g><g font-size=\"12\" fill=\"#5b6b76\"><text x=\"18\" y=\"126\">R-C(=O)-OH</text><text x=\"208\" y=\"126\">R-C(=O)-O-R</text><text x=\"398\" y=\"126\">R-C(=O)-NH-R</text></g></svg>",
    "figcap": "All three share the C=O carbonyl. What hangs off it defines the group: -OH is a carboxylic acid, -O-R is an ester, -N is an amide."
   },
   {
    "h": "The carboxyl group",
    "items": [
     "A carboxylic acid is R-C(=O)-OH, condensed R-COOH: a carbonyl (C=O) and a hydroxyl (-OH) on the SAME carbon.",
     "Naming: replace the parent alkane -e with -oic acid. Ethane -> ethanoic acid (acetic acid, CH3COOH).",
     "Important terms: carbonyl carbon (the C of C=O), hydroxyl (-OH), carboxyl group (the whole -COOH)."
    ]
   },
   {
    "h": "Why it acts as an acid",
    "items": [
     "The -OH hydrogen can leave, so a carboxylic acid is a WEAK acid.",
     "Losing H+ gives the carboxylate anion R-COO- (acetic acid -> acetate, CH3COO-).",
     "Short carboxylic acids dissolve in water (the -COOH hydrogen-bonds); solubility falls as the chain grows.",
     "Remember: see -C(=O)-OH = carboxylic acid; it loses H+ to become R-COO-."
    ]
   },
   {
    "h": "Neutralization (worked)",
    "items": [
     "A carboxylic acid is neutralized by base: CH3CH2COOH + NaOH -> CH3CH2COO- Na+ + H2O (a 1:1 mole ratio).",
     "Carboxylate resonance spreads the negative charge over both oxygens, which is why -COOH is only a weak acid.",
     "Remember: R-COOH (acid) <-> R-COO- (its conjugate base)."
    ]
   }
  ]
 },
 {
  "id": "ST_ch17_esters",
  "subjectId": "chem",
  "chapterId": "ch17",
  "topicId": "esters",
  "title": "Esters & esterification",
  "overview": "An ester is R-C(=O)-O-R'. It forms when a carboxylic acid and an alcohol join and release water (esterification).",
  "sections": [
   {
    "h": "The ester group",
    "items": [
     "An ester is R-C(=O)-O-R': a carbonyl carbon bonded to an oxygen that is ALSO bonded to a second carbon group.",
     "Tell it from an acid: an acid ends in -O-H, an ester ends in -O-R' (a carbon replaces the acid's hydrogen)."
    ]
   },
   {
    "h": "Esterification (building an ester)",
    "fig": "<svg viewBox=\"0 0 560 120\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><polyline points=\"30,70 48,60 66,70 84,60 102,70 120,60 138,70 156,60 174,70 192,60 210,70\"/><line x1=\"206\" y1=\"66\" x2=\"206\" y2=\"42\"/><line x1=\"214\" y1=\"66\" x2=\"214\" y2=\"42\"/><polyline points=\"294,70 312,60 330,70 348,60 366,70 384,60 402,70 420,60 438,70 456,60 474,70 492,60 510,70\"/></g><g stroke=\"#2563c9\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"214\" y1=\"70\" x2=\"242\" y2=\"70\"/><line x1=\"262\" y1=\"70\" x2=\"294\" y2=\"70\"/><line x1=\"250\" y1=\"26\" x2=\"250\" y2=\"60\"/></g><text x=\"205\" y=\"36\" font-size=\"15\" fill=\"#1f2d3a\">O</text><text x=\"245\" y=\"75\" font-size=\"15\" fill=\"#2563c9\" font-weight=\"700\">O</text><text x=\"196\" y=\"20\" font-size=\"13\" fill=\"#2563c9\" font-weight=\"700\">ester bond</text><text x=\"60\" y=\"104\" font-size=\"12\" fill=\"#5b6b76\">fatty acid part</text><text x=\"356\" y=\"104\" font-size=\"12\" fill=\"#5b6b76\">long-chain alcohol part</text></svg>",
    "figcap": "A wax ester = one fatty acid + one long-chain alcohol joined by a single ester bond (blue).",
    "items": [
     "Carboxylic acid + alcohol -> ester + water (acid-catalyzed). The acid's -OH and the alcohol's H leave together as H2O.",
     "Worked example: CH3COOH (acetic acid) + CH3CH2OH (ethanol) -> CH3C(=O)OCH2CH3 (ethyl acetate) + H2O.",
     "A wax ester is one long-chain fatty acid + one long-chain alcohol (a single ester bond).",
     "Remember: esterification joins acid + alcohol and releases one water."
    ]
   }
  ]
 },
 {
  "id": "ST_ch17_hydrolysis",
  "subjectId": "chem",
  "chapterId": "ch17",
  "topicId": "hydrolysis",
  "title": "Acidic hydrolysis vs saponification",
  "overview": "Hydrolysis splits an ester with water. Acid gives back a carboxylic acid + alcohol; NaOH gives a carboxylate salt (soap) + alcohol.",
  "sections": [
   {
    "h": "The bond that breaks",
    "fig": "<svg viewBox=\"0 0 560 120\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><polyline points=\"30,70 48,60 66,70 84,60 102,70 120,60 138,70 156,60 174,70 192,60 210,70\"/><line x1=\"206\" y1=\"66\" x2=\"206\" y2=\"42\"/><line x1=\"214\" y1=\"66\" x2=\"214\" y2=\"42\"/><polyline points=\"294,70 312,60 330,70 348,60 366,70 384,60 402,70 420,60 438,70 456,60 474,70 492,60 510,70\"/></g><g stroke=\"#2563c9\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"214\" y1=\"70\" x2=\"242\" y2=\"70\"/><line x1=\"262\" y1=\"70\" x2=\"294\" y2=\"70\"/><line x1=\"250\" y1=\"26\" x2=\"250\" y2=\"60\"/></g><text x=\"205\" y=\"36\" font-size=\"15\" fill=\"#1f2d3a\">O</text><text x=\"245\" y=\"75\" font-size=\"15\" fill=\"#2563c9\" font-weight=\"700\">O</text><text x=\"196\" y=\"20\" font-size=\"13\" fill=\"#2563c9\" font-weight=\"700\">ester bond</text><text x=\"60\" y=\"104\" font-size=\"12\" fill=\"#5b6b76\">fatty acid part</text><text x=\"356\" y=\"104\" font-size=\"12\" fill=\"#5b6b76\">long-chain alcohol part</text></svg>",
    "figcap": "Hydrolysis cleaves the ester bond (blue): the bond between the carbonyl carbon and the single-bond oxygen. The C=O stays on the acid side.",
    "items": [
     "Only the C(carbonyl)-O(single-bond) bond breaks. The carbonyl side keeps its C=O and becomes the acid; the O-R' side becomes the alcohol."
    ]
   },
   {
    "h": "Acidic hydrolysis (worked)",
    "items": [
     "Rule: ester + water --(H+)--> carboxylic acid + alcohol.",
     "Given: CH3C(=O)OCH2CH3 (ethyl acetate) + H2O, acidic.",
     "Step 1: break the carbonyl C - O bond. Step 2: carbonyl side + OH -> CH3COOH. Step 3: O-R' side + H -> CH3CH2OH.",
     "Answer: CH3COOH (acetic acid) + CH3CH2OH (ethanol)."
    ]
   },
   {
    "h": "Basic hydrolysis / saponification (worked)",
    "items": [
     "Rule: ester + NaOH -> sodium carboxylate (R-COO- Na+) + alcohol. Long-chain salts are soaps.",
     "Given: CH3C(=O)OCH3 (methyl acetate) + NaOH.",
     "Step: carbonyl side -> CH3COO- Na+ (sodium acetate); O-R' side -> CH3OH (methanol).",
     "Answer: CH3COO- Na+ + CH3OH.",
     "Remember: acid hydrolysis gives R-COOH; base (NaOH) gives R-COO- Na+."
    ]
   },
   {
    "h": "Triacylglycerol: where 3 fatty acids come from",
    "fig": "<svg viewBox=\"0 0 400 170\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"58\" y1=\"52\" x2=\"58\" y2=\"76\"/><line x1=\"58\" y1=\"92\" x2=\"58\" y2=\"116\"/><line x1=\"142\" y1=\"36\" x2=\"142\" y2=\"18\"/><line x1=\"150\" y1=\"36\" x2=\"150\" y2=\"18\"/><polyline points=\"150,40 168,30 186,40 204,30 222,40 240,30 258,40 276,30 294,40 312,30 330,40\"/><line x1=\"142\" y1=\"76\" x2=\"142\" y2=\"58\"/><line x1=\"150\" y1=\"76\" x2=\"150\" y2=\"58\"/><polyline points=\"150,80 168,70 186,80 204,70 222,80 240,70 258,80 276,70 294,80 312,70 330,80\"/><line x1=\"142\" y1=\"116\" x2=\"142\" y2=\"98\"/><line x1=\"150\" y1=\"116\" x2=\"150\" y2=\"98\"/><polyline points=\"150,120 168,110 186,120 204,110 222,120 240,110 258,120 276,110 294,120 312,110 330,120\"/></g><g stroke=\"#2563c9\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"74\" y1=\"40\" x2=\"100\" y2=\"40\"/><line x1=\"116\" y1=\"40\" x2=\"140\" y2=\"40\"/><line x1=\"74\" y1=\"80\" x2=\"100\" y2=\"80\"/><line x1=\"116\" y1=\"80\" x2=\"140\" y2=\"80\"/><line x1=\"74\" y1=\"120\" x2=\"100\" y2=\"120\"/><line x1=\"116\" y1=\"120\" x2=\"140\" y2=\"120\"/></g><g font-size=\"14\" fill=\"#1f2d3a\"><text x=\"34\" y=\"45\">CH2</text><text x=\"42\" y=\"85\">CH</text><text x=\"34\" y=\"125\">CH2</text><text x=\"134\" y=\"14\">O</text><text x=\"134\" y=\"54\">O</text><text x=\"134\" y=\"94\">O</text></g><g font-size=\"14\" fill=\"#2563c9\" font-weight=\"700\"><text x=\"101\" y=\"45\">O</text><text x=\"101\" y=\"85\">O</text><text x=\"101\" y=\"125\">O</text></g><text x=\"205\" y=\"16\" font-size=\"13\" fill=\"#0f7d86\" font-weight=\"700\">3 ester bonds (blue)</text></svg>",
    "figcap": "Glycerol (left) joined to three fatty acids through three ester bonds (blue). Full hydrolysis gives 1 glycerol + 3 fatty acids; saponification gives 1 glycerol + 3 soap salts.",
    "items": [
     "A fat (triacylglycerol) has THREE ester bonds, so complete hydrolysis releases THREE fatty acids.",
     "Acidic: 1 TAG + 3 H2O -> 1 glycerol + 3 fatty acids.",
     "Saponification: 1 TAG + 3 NaOH -> 1 glycerol + 3 soap (sodium) salts."
    ]
   },
   {
    "h": "Saponification mole math (worked)",
    "items": [
     "Given 0.250 mol triacylglycerol + excess NaOH. Each TAG has 3 ester bonds -> 3 x 0.250 = 0.750 mol NaOH consumed and 0.750 mol sodium carboxylate formed.",
     "One glycerol backbone per TAG -> 0.250 mol glycerol.",
     "Remember: one hydrolysis event per ester cleaved; three esters per TAG."
    ]
   }
  ]
 },
 {
  "id": "ST_ch17_amides",
  "subjectId": "chem",
  "chapterId": "ch17",
  "topicId": "amides",
  "title": "Amides",
  "overview": "An amide has a carbonyl carbon bonded straight to nitrogen (R-C(=O)-N). It is the linkage that attaches a fatty acid to sphingosine.",
  "sections": [
   {
    "h": "The amide group",
    "fig": "<svg viewBox=\"0 0 600 140\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"35\" y1=\"66\" x2=\"80\" y2=\"66\"/><line x1=\"76\" y1=\"62\" x2=\"76\" y2=\"34\"/><line x1=\"84\" y1=\"62\" x2=\"84\" y2=\"34\"/><line x1=\"80\" y1=\"66\" x2=\"122\" y2=\"66\"/><line x1=\"225\" y1=\"66\" x2=\"270\" y2=\"66\"/><line x1=\"266\" y1=\"62\" x2=\"266\" y2=\"34\"/><line x1=\"274\" y1=\"62\" x2=\"274\" y2=\"34\"/><line x1=\"270\" y1=\"66\" x2=\"304\" y2=\"66\"/><line x1=\"326\" y1=\"66\" x2=\"352\" y2=\"66\"/><line x1=\"415\" y1=\"66\" x2=\"460\" y2=\"66\"/><line x1=\"456\" y1=\"62\" x2=\"456\" y2=\"34\"/><line x1=\"464\" y1=\"62\" x2=\"464\" y2=\"34\"/><line x1=\"460\" y1=\"66\" x2=\"496\" y2=\"66\"/><line x1=\"522\" y1=\"66\" x2=\"548\" y2=\"66\"/></g><g font-size=\"16\" fill=\"#1f2d3a\"><text x=\"18\" y=\"71\">R</text><text x=\"71\" y=\"28\">O</text><text x=\"126\" y=\"71\">OH</text><text x=\"208\" y=\"71\">R</text><text x=\"261\" y=\"28\">O</text><text x=\"308\" y=\"71\">O</text><text x=\"356\" y=\"71\">R</text><text x=\"398\" y=\"71\">R</text><text x=\"451\" y=\"28\">O</text><text x=\"500\" y=\"71\">N</text><text x=\"500\" y=\"90\" font-size=\"12\">H</text><text x=\"552\" y=\"71\">R</text></g><g font-size=\"13\" font-weight=\"700\" fill=\"#0f7d86\"><text x=\"18\" y=\"108\">Carboxylic acid</text><text x=\"208\" y=\"108\">Ester</text><text x=\"398\" y=\"108\">Amide</text></g><g font-size=\"12\" fill=\"#5b6b76\"><text x=\"18\" y=\"126\">R-C(=O)-OH</text><text x=\"208\" y=\"126\">R-C(=O)-O-R</text><text x=\"398\" y=\"126\">R-C(=O)-NH-R</text></g></svg>",
    "figcap": "Ester vs amide: the atom next to the carbonyl tells them apart - an O (ester) or an N (amide).",
    "items": [
     "An amide has a carbonyl carbon bonded DIRECTLY to nitrogen: R-C(=O)-N.",
     "Key contrast: ester = C(=O)-O-C, amide = C(=O)-N. Check the atom next to the carbonyl (O vs N)."
    ]
   },
   {
    "h": "The amide in sphingomyelin",
    "items": [
     "In sphingomyelin the fatty acid's carbonyl carbon is joined to the NITROGEN of sphingosine: an amide bond, R-C(=O)-NH-sphingosine.",
     "Remember: carbonyl-carbon to nitrogen = amide; that is how the fatty-acid tail attaches in sphingomyelin."
    ]
   },
   {
    "h": "Amide classes & hydrolysis (worked)",
    "items": [
     "Amides are primary/secondary/tertiary by how many carbons sit on the nitrogen (named -amide, with N- locants for N-substituents).",
     "Worked: N-methylethanamide CH3C(=O)NHCH3 + aqueous acid, heat. Break the acyl C-N bond -> acid side CH3COOH (ethanoic acid) + nitrogen side CH3NH3+ (protonated), 1:1.",
     "Remember: find C(=O)-N to identify an amide, even when the nitrogen carries a carbon substituent."
    ]
   }
  ]
 },
 {
  "id": "ST_ch18_fattyacids",
  "subjectId": "chem",
  "chapterId": "ch18",
  "topicId": "fattyacids",
  "title": "Fatty acids & melting point",
  "overview": "How chain length and cis/trans double bonds set a fatty acid's shape and melting point.",
  "sections": [
   {
    "h": "Diagram: fatty-acid shape and melting point",
    "fig": "<svg viewBox=\"0 0 600 195\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"104\" y1=\"45\" x2=\"120\" y2=\"45\"/><polyline points=\"120,45 138,35 156,45 174,35 192,45 210,35 228,45 246,35 264,45 282,35 300,45 318,35 336,45 354,35 372,45\"/><line x1=\"104\" y1=\"100\" x2=\"120\" y2=\"100\"/><polyline points=\"120,100 138,90 156,100 174,90 192,100 210,90 228,100 246,116 264,106 282,122 300,112 318,128 336,118\"/><line x1=\"205\" y1=\"85\" x2=\"223\" y2=\"95\"/><line x1=\"104\" y1=\"160\" x2=\"120\" y2=\"160\"/><polyline points=\"120,160 138,150 156,160 174,150 192,160 210,150 228,160 246,150 264,160 282,150 300,160 318,150 336,160 354,150 372,160\"/><line x1=\"208\" y1=\"145\" x2=\"226\" y2=\"155\"/></g><g font-size=\"13\" fill=\"#1f2d3a\"><text x=\"68\" y=\"49\">HOOC</text><text x=\"68\" y=\"104\">HOOC</text><text x=\"68\" y=\"164\">HOOC</text></g><g font-weight=\"700\" font-size=\"13\" fill=\"#0f7d86\"><text x=\"392\" y=\"42\">Saturated</text><text x=\"360\" y=\"104\">cis unsaturated</text><text x=\"392\" y=\"159\">trans unsaturated</text></g><g font-size=\"12\" fill=\"#5b6b76\"><text x=\"392\" y=\"58\">straight - high mp</text><text x=\"360\" y=\"120\">kink - low mp</text><text x=\"392\" y=\"175\">straight - high mp</text></g></svg>",
    "figcap": "Saturated chains lie straight and pack tightly (higher melting point). A cis C=C kinks the chain so it cannot pack (lower melting point). A trans C=C stays nearly straight (higher melting point)."
   },
   {
    "h": "Fatty-acid structure & X:Y notation",
    "items": [
     "A fatty acid = a hydrocarbon chain + a terminal -COOH. Start counting at the carboxyl carbon = C1; each corner/line end is a carbon.",
     "X:Y notation: X = total carbons, Y = number of carbon-carbon double bonds (the carbonyl C=O does NOT count).",
     "Saturated = zero C=C. Stearic acid is 18:0 = CH3(CH2)16COOH.",
     "delta-11 (Delta 11) means a double bond at C11=C12 counting from -COOH."
    ]
   },
   {
    "h": "cis / trans & melting point",
    "items": [
     "A cis double bond puts the chain segments on the same side and bends the chain; a trans double bond keeps it straighter.",
     "Tighter packing generally raises melting point: a cis-unsaturated fatty acid usually melts LOWER than its trans isomer.",
     "Remember: count -COOH as C1, count only C=C bonds after the colon, and cis bends = looser packing."
    ]
   },
   {
    "h": "Worked example: counting carbons (18:0 and a 20:2 cis)",
    "fig": "<svg viewBox=\"0 0 600 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><polyline points=\"55,60 69,50 83,60 97,50 111,60 125,50 139,60 153,50 167,60 181,50 195,60 209,50 223,60 237,50 251,60 265,50 279,60 293,50\"/><line x1=\"289\" y1=\"46\" x2=\"289\" y2=\"24\"/><line x1=\"297\" y1=\"46\" x2=\"297\" y2=\"24\"/><line x1=\"293\" y1=\"50\" x2=\"315\" y2=\"62\"/></g><text x=\"16\" y=\"64\" font-size=\"13\" fill=\"#1f2d3a\">CH3</text><text x=\"284\" y=\"20\" font-size=\"14\" fill=\"#1f2d3a\">O</text><text x=\"319\" y=\"66\" font-size=\"13\" fill=\"#1f2d3a\">OH</text><text x=\"360\" y=\"42\" font-size=\"13\" font-weight=\"700\" fill=\"#0f7d86\">Stearic acid</text><text x=\"360\" y=\"60\" font-size=\"12\" fill=\"#5b6b76\">straight chain, no C=C</text><text x=\"55\" y=\"92\" font-size=\"13\" fill=\"#1f2d3a\">1 CH3 + 16 CH2 + 1 COOH = 18 carbons</text><text x=\"55\" y=\"110\" font-size=\"13\" font-weight=\"700\" fill=\"#2563c9\">= 18:0  (18 carbons, 0 double bonds)</text><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><polyline points=\"40,170 56,158 72,170 88,158 104,170 120,158 136,170 152,158 168,170 184,158 200,170 216,158 232,170 248,158 264,170 280,158 296,170 312,158 328,170 344,158\"/><line x1=\"340\" y1=\"154\" x2=\"340\" y2=\"132\"/><line x1=\"348\" y1=\"154\" x2=\"348\" y2=\"132\"/><line x1=\"344\" y1=\"158\" x2=\"366\" y2=\"170\"/></g><g stroke=\"#2563c9\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"170\" y1=\"164\" x2=\"186\" y2=\"152\"/><line x1=\"122\" y1=\"152\" x2=\"138\" y2=\"164\"/></g><text x=\"8\" y=\"174\" font-size=\"13\" fill=\"#1f2d3a\">CH3</text><text x=\"334\" y=\"128\" font-size=\"13\" fill=\"#1f2d3a\">O</text><text x=\"369\" y=\"174\" font-size=\"13\" fill=\"#1f2d3a\">OH</text><text x=\"150\" y=\"141\" font-size=\"12\" font-weight=\"700\" fill=\"#2563c9\">C11=C12</text><line x1=\"176\" y1=\"145\" x2=\"178\" y2=\"153\" stroke=\"#2563c9\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><text x=\"56\" y=\"141\" font-size=\"12\" font-weight=\"700\" fill=\"#2563c9\">C14=C15</text><line x1=\"92\" y1=\"145\" x2=\"128\" y2=\"153\" stroke=\"#2563c9\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><text x=\"388\" y=\"150\" font-size=\"13\" font-weight=\"700\" fill=\"#0f7d86\">20 carbons, 2 cis C=C</text><text x=\"388\" y=\"168\" font-size=\"12\" fill=\"#5b6b76\">count C1 = COOH end</text></svg>",
    "figcap": "Top: stearic acid - count 1 CH3 + 16 CH2 + 1 COOH = 18 carbons, no C=C, so 18:0. Bottom: a 20-carbon acid with cis double bonds marked at C11=C12 and C14=C15 (count from the COOH end).",
    "items": [
     "Stearic acid: count every carbon on the line-angle drawing. 1 methyl (CH3) end carbon + 16 methylene (CH2) carbons + 1 carboxyl carbon (the -COOH carbon) = 18 carbons.",
     "No carbon-carbon double bonds -> the second number is 0, so the notation is 18:0.",
     "20-carbon example: number carbons starting at the -COOH carbon as C1. The double bonds sit at C11=C12 and C14=C15, so it is 20 carbons with 2 double bonds.",
     "Spotting cis: at each C=C the two chain pieces leave on the SAME side, kinking the chain (trans would stay straight).",
     "Remember: X:Y = (total carbons):(number of C=C). Count -COOH as C1 and never count the C=O as a double bond here."
    ]
   },
   {
    "h": "Delta vs omega numbering (worked)",
    "items": [
     "Delta numbering counts a double bond from the COOH carbon; omega numbering counts from the methyl (CH3) end.",
     "Worked: a 20:2 acid with double bonds at delta-11 and delta-14. From the methyl end the first double bond is at 20 - 14 = 6, so it is an omega-6 fatty acid.",
     "Remember: delta counts from COOH, omega from CH3; X:Y gives total carbons : total C=C."
    ]
   }
  ]
 },
 {
  "id": "ST_ch18_waxestag",
  "subjectId": "chem",
  "chapterId": "ch18",
  "topicId": "waxestag",
  "title": "Waxes & triacylglycerols",
  "overview": "The ester bonds that build waxes and fats, and the hydrolysis that splits them.",
  "sections": [
   {
    "h": "Diagram: a wax ester and where it splits",
    "fig": "<svg viewBox=\"0 0 560 120\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><polyline points=\"30,70 48,60 66,70 84,60 102,70 120,60 138,70 156,60 174,70 192,60 210,70\"/><line x1=\"206\" y1=\"66\" x2=\"206\" y2=\"42\"/><line x1=\"214\" y1=\"66\" x2=\"214\" y2=\"42\"/><polyline points=\"294,70 312,60 330,70 348,60 366,70 384,60 402,70 420,60 438,70 456,60 474,70 492,60 510,70\"/></g><g stroke=\"#2563c9\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"214\" y1=\"70\" x2=\"242\" y2=\"70\"/><line x1=\"262\" y1=\"70\" x2=\"294\" y2=\"70\"/><line x1=\"250\" y1=\"26\" x2=\"250\" y2=\"60\"/></g><text x=\"205\" y=\"36\" font-size=\"15\" fill=\"#1f2d3a\">O</text><text x=\"245\" y=\"75\" font-size=\"15\" fill=\"#2563c9\" font-weight=\"700\">O</text><text x=\"196\" y=\"20\" font-size=\"13\" fill=\"#2563c9\" font-weight=\"700\">ester bond</text><text x=\"60\" y=\"104\" font-size=\"12\" fill=\"#5b6b76\">fatty acid part</text><text x=\"356\" y=\"104\" font-size=\"12\" fill=\"#5b6b76\">long-chain alcohol part</text></svg>",
    "figcap": "A wax = one fatty acid + one long-chain alcohol joined by a single ester bond (blue). Hydrolysis cleaves there: acid gives fatty acid + alcohol; NaOH gives a soap (carboxylate salt) + alcohol."
   },
   {
    "h": "Diagram: a triacylglycerol (fat / oil)",
    "fig": "<svg viewBox=\"0 0 400 170\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"58\" y1=\"52\" x2=\"58\" y2=\"76\"/><line x1=\"58\" y1=\"92\" x2=\"58\" y2=\"116\"/><line x1=\"142\" y1=\"36\" x2=\"142\" y2=\"18\"/><line x1=\"150\" y1=\"36\" x2=\"150\" y2=\"18\"/><polyline points=\"150,40 168,30 186,40 204,30 222,40 240,30 258,40 276,30 294,40 312,30 330,40\"/><line x1=\"142\" y1=\"76\" x2=\"142\" y2=\"58\"/><line x1=\"150\" y1=\"76\" x2=\"150\" y2=\"58\"/><polyline points=\"150,80 168,70 186,80 204,70 222,80 240,70 258,80 276,70 294,80 312,70 330,80\"/><line x1=\"142\" y1=\"116\" x2=\"142\" y2=\"98\"/><line x1=\"150\" y1=\"116\" x2=\"150\" y2=\"98\"/><polyline points=\"150,120 168,110 186,120 204,110 222,120 240,110 258,120 276,110 294,120 312,110 330,120\"/></g><g stroke=\"#2563c9\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"><line x1=\"74\" y1=\"40\" x2=\"100\" y2=\"40\"/><line x1=\"116\" y1=\"40\" x2=\"140\" y2=\"40\"/><line x1=\"74\" y1=\"80\" x2=\"100\" y2=\"80\"/><line x1=\"116\" y1=\"80\" x2=\"140\" y2=\"80\"/><line x1=\"74\" y1=\"120\" x2=\"100\" y2=\"120\"/><line x1=\"116\" y1=\"120\" x2=\"140\" y2=\"120\"/></g><g font-size=\"14\" fill=\"#1f2d3a\"><text x=\"34\" y=\"45\">CH2</text><text x=\"42\" y=\"85\">CH</text><text x=\"34\" y=\"125\">CH2</text><text x=\"134\" y=\"14\">O</text><text x=\"134\" y=\"54\">O</text><text x=\"134\" y=\"94\">O</text></g><g font-size=\"14\" fill=\"#2563c9\" font-weight=\"700\"><text x=\"101\" y=\"45\">O</text><text x=\"101\" y=\"85\">O</text><text x=\"101\" y=\"125\">O</text></g><text x=\"205\" y=\"16\" font-size=\"13\" fill=\"#0f7d86\" font-weight=\"700\">3 ester bonds (blue)</text></svg>",
    "figcap": "Glycerol (left) joined to three fatty acids through three ester bonds (blue). Full hydrolysis gives 1 glycerol + 3 fatty acids; saponification gives 1 glycerol + 3 soap salts."
   },
   {
    "h": "Waxes, triacylglycerols & their reactions",
    "items": [
     "Wax ester = one fatty acid + one long-chain alcohol (one ester bond).",
     "Triacylglycerol (TAG) = glycerol + three fatty acids by three ester bonds; TAGs store energy.",
     "Complete acidic hydrolysis of one TAG: 3 H2O -> 1 glycerol + 3 free fatty acids. Saponification with 3 NaOH -> 1 glycerol + 3 soap (sodium) salts.",
     "Lipase hydrolyzes ester bonds in fats. Hydrogenation adds H2 across C=C (metal catalyst such as Ni), making a fat more saturated and firmer.",
     "Remember: hydrolysis splits ester bonds; hydrogenation converts C=C to C-C."
    ]
   },
   {
    "h": "Hydrogenation mole math (worked)",
    "items": [
     "Hydrogenation adds H2 across each C=C (metal catalyst such as Ni), making fats more saturated and firmer.",
     "Worked: 0.200 mol TAG with three 18:1 tails (one C=C each) -> 3 C=C per TAG -> 3 x 0.200 = 0.600 mol H2 consumed, giving 0.200 mol TAG with three 18:0 tails.",
     "Remember: one H2 per C=C hydrogenated; hydrolysis splits esters, hydrogenation changes the tails."
    ]
   }
  ]
 },
 {
  "id": "ST_ch18_membranes",
  "subjectId": "chem",
  "chapterId": "ch18",
  "topicId": "membranes",
  "title": "Phospholipids & cell membranes",
  "overview": "Phospholipids, the bilayer they build, and the fluid mosaic model of the cell membrane.",
  "sections": [
   {
    "h": "Diagram: the phospholipid bilayer",
    "fig": "<svg viewBox=\"0 0 560 215\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" stroke-linecap=\"round\"><line x1=\"40\" y1=\"59\" x2=\"34\" y2=\"100\"/><line x1=\"40\" y1=\"59\" x2=\"46\" y2=\"100\"/><line x1=\"88\" y1=\"59\" x2=\"82\" y2=\"100\"/><line x1=\"88\" y1=\"59\" x2=\"94\" y2=\"100\"/><line x1=\"136\" y1=\"59\" x2=\"130\" y2=\"100\"/><line x1=\"136\" y1=\"59\" x2=\"142\" y2=\"100\"/><line x1=\"184\" y1=\"59\" x2=\"178\" y2=\"100\"/><line x1=\"184\" y1=\"59\" x2=\"190\" y2=\"100\"/><line x1=\"232\" y1=\"59\" x2=\"226\" y2=\"100\"/><line x1=\"232\" y1=\"59\" x2=\"238\" y2=\"100\"/><line x1=\"280\" y1=\"59\" x2=\"274\" y2=\"100\"/><line x1=\"280\" y1=\"59\" x2=\"286\" y2=\"100\"/><line x1=\"328\" y1=\"59\" x2=\"322\" y2=\"100\"/><line x1=\"328\" y1=\"59\" x2=\"334\" y2=\"100\"/><line x1=\"376\" y1=\"59\" x2=\"370\" y2=\"100\"/><line x1=\"376\" y1=\"59\" x2=\"382\" y2=\"100\"/><line x1=\"424\" y1=\"59\" x2=\"418\" y2=\"100\"/><line x1=\"424\" y1=\"59\" x2=\"430\" y2=\"100\"/><line x1=\"472\" y1=\"59\" x2=\"466\" y2=\"100\"/><line x1=\"472\" y1=\"59\" x2=\"478\" y2=\"100\"/><line x1=\"520\" y1=\"59\" x2=\"514\" y2=\"100\"/><line x1=\"520\" y1=\"59\" x2=\"526\" y2=\"100\"/><line x1=\"40\" y1=\"156\" x2=\"34\" y2=\"115\"/><line x1=\"40\" y1=\"156\" x2=\"46\" y2=\"115\"/><line x1=\"88\" y1=\"156\" x2=\"82\" y2=\"115\"/><line x1=\"88\" y1=\"156\" x2=\"94\" y2=\"115\"/><line x1=\"136\" y1=\"156\" x2=\"130\" y2=\"115\"/><line x1=\"136\" y1=\"156\" x2=\"142\" y2=\"115\"/><line x1=\"184\" y1=\"156\" x2=\"178\" y2=\"115\"/><line x1=\"184\" y1=\"156\" x2=\"190\" y2=\"115\"/><line x1=\"232\" y1=\"156\" x2=\"226\" y2=\"115\"/><line x1=\"232\" y1=\"156\" x2=\"238\" y2=\"115\"/><line x1=\"280\" y1=\"156\" x2=\"274\" y2=\"115\"/><line x1=\"280\" y1=\"156\" x2=\"286\" y2=\"115\"/><line x1=\"328\" y1=\"156\" x2=\"322\" y2=\"115\"/><line x1=\"328\" y1=\"156\" x2=\"334\" y2=\"115\"/><line x1=\"376\" y1=\"156\" x2=\"370\" y2=\"115\"/><line x1=\"376\" y1=\"156\" x2=\"382\" y2=\"115\"/><line x1=\"424\" y1=\"156\" x2=\"418\" y2=\"115\"/><line x1=\"424\" y1=\"156\" x2=\"430\" y2=\"115\"/><line x1=\"472\" y1=\"156\" x2=\"466\" y2=\"115\"/><line x1=\"472\" y1=\"156\" x2=\"478\" y2=\"115\"/><line x1=\"520\" y1=\"156\" x2=\"514\" y2=\"115\"/><line x1=\"520\" y1=\"156\" x2=\"526\" y2=\"115\"/></g><g fill=\"#0f7d86\"><circle cx=\"40\" cy=\"50\" r=\"9\"/><circle cx=\"88\" cy=\"50\" r=\"9\"/><circle cx=\"136\" cy=\"50\" r=\"9\"/><circle cx=\"184\" cy=\"50\" r=\"9\"/><circle cx=\"232\" cy=\"50\" r=\"9\"/><circle cx=\"280\" cy=\"50\" r=\"9\"/><circle cx=\"328\" cy=\"50\" r=\"9\"/><circle cx=\"376\" cy=\"50\" r=\"9\"/><circle cx=\"424\" cy=\"50\" r=\"9\"/><circle cx=\"472\" cy=\"50\" r=\"9\"/><circle cx=\"520\" cy=\"50\" r=\"9\"/><circle cx=\"40\" cy=\"165\" r=\"9\"/><circle cx=\"88\" cy=\"165\" r=\"9\"/><circle cx=\"136\" cy=\"165\" r=\"9\"/><circle cx=\"184\" cy=\"165\" r=\"9\"/><circle cx=\"232\" cy=\"165\" r=\"9\"/><circle cx=\"280\" cy=\"165\" r=\"9\"/><circle cx=\"328\" cy=\"165\" r=\"9\"/><circle cx=\"376\" cy=\"165\" r=\"9\"/><circle cx=\"424\" cy=\"165\" r=\"9\"/><circle cx=\"472\" cy=\"165\" r=\"9\"/><circle cx=\"520\" cy=\"165\" r=\"9\"/></g><text x=\"40\" y=\"24\" fill=\"#0f7d86\" font-size=\"13\" font-weight=\"700\">Water (outside cell)</text><text x=\"40\" y=\"206\" fill=\"#0f7d86\" font-size=\"13\" font-weight=\"700\">Water (inside cell)</text><text x=\"205\" y=\"112\" fill=\"#5b6b76\" font-size=\"13\">hydrophobic core (tails)</text></svg>",
    "figcap": "Amphipathic phospholipids line up so the polar heads face water on BOTH sides and the nonpolar tails hide in the middle. cis tails pack loosely and raise membrane fluidity."
   },
   {
    "h": "Membrane phospholipids",
    "items": [
     "Glycerophospholipid = glycerol backbone + two ester-linked fatty-acid tails + a phosphate-containing polar head.",
     "Phospholipids are amphipathic: polar heads face water on both sides of a bilayer; nonpolar tails point inward."
    ]
   },
   {
    "h": "Fluid mosaic model",
    "items": [
     "Lipids and many proteins move laterally. Integral proteins are embedded, transmembrane proteins span the membrane, peripheral proteins sit on a surface.",
     "Cholesterol sits among the lipids; surface carbohydrates help with cell recognition.",
     "cis-unsaturated tails pack less tightly and generally increase membrane fluidity.",
     "Linkage check: a glycerophospholipid's two fatty-acid tails are ESTER-linked; in sphingomyelin one tail is AMIDE-linked (see the Sphingomyelin & myelin topic)."
    ]
   }
  ]
 },
 {
  "id": "ST_ch18_sphingomyelin",
  "subjectId": "chem",
  "chapterId": "ch18",
  "topicId": "sphingomyelin",
  "title": "Sphingomyelin & myelin",
  "overview": "Sphingomyelin is a sphingosine-based phospholipid whose fatty acid is amide-linked; it is a major lipid of the myelin sheath that insulates nerves.",
  "sections": [
   {
    "h": "Sphingomyelin structure",
    "items": [
     "Its backbone is sphingosine, NOT glycerol. Sphingosine already carries one long hydrocarbon chain (CH(OH)-CH=CH-(CH2)12-CH3) - that is the first tail.",
     "A second fatty acid is joined to sphingosine's nitrogen by an AMIDE bond (R-C(=O)-NH-), not an ester. That amide linkage is the key difference from a glycerophospholipid (whose tails are ester-linked).",
     "The polar head is a phosphate + choline group, so sphingomyelin is still amphipathic: a polar head plus two nonpolar tails that fit into a bilayer."
    ]
   },
   {
    "h": "Role in myelin",
    "items": [
     "Sphingomyelin is a major lipid of the myelin sheath - the insulating wrap around many nerve axons.",
     "That insulation speeds nerve-signal conduction; losing myelin disrupts signaling.",
     "Remember: sphingosine backbone + amide-linked fatty acid + phosphate-choline head = sphingomyelin, a myelin lipid."
    ]
   }
  ]
 },
 {
  "id": "ST_ch18_steroids",
  "subjectId": "chem",
  "chapterId": "ch18",
  "topicId": "steroids",
  "title": "Steroids & lipoproteins",
  "overview": "The 6-6-6-5 steroid nucleus, cholesterol, and how LDL and HDL move it.",
  "sections": [
   {
    "h": "Diagram: the fused steroid nucleus",
    "fig": "<svg viewBox=\"40 100 230 135\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linejoin=\"round\"><polygon points=\"80,154 102.5,167 102.5,193 80,206 57.5,193 57.5,167\"/><polygon points=\"125,154 147.5,167 147.5,193 125,206 102.5,193 102.5,167\"/><polygon points=\"147.5,115 170,128 170,154 147.5,167 125,154 125,128\"/><polygon points=\"170,128 170,154 196,162 212,141 196,120\"/></g><g font-size=\"15\" font-weight=\"700\" fill=\"#0f7d86\"><text x=\"74\" y=\"186\">A</text><text x=\"119\" y=\"186\">B</text><text x=\"141\" y=\"147\">C</text><text x=\"187\" y=\"146\">D</text></g><text x=\"95\" y=\"226\" font-size=\"13\" font-weight=\"700\" fill=\"#1f2d3a\">6 - 6 - 6 - 5 fused rings</text></svg>",
    "figcap": "Every steroid (cholesterol, digoxin, hormones) is built on this same four-ring core: three six-membered rings (A, B, C) fused to one five-membered ring (D) = 6-6-6-5."
   },
   {
    "h": "Steroids & lipoproteins",
    "items": [
     "Steroid skeleton = four fused rings (A, B, C are six-membered; D is five-membered = 6-6-6-5). Fused rings share an edge.",
     "Cholesterol = the steroid core + an -OH + a hydrocarbon tail. Digoxin's steroid core is the same 6-6-6-5 cluster (its sugars and lactone are separate).",
     "LDL carries cholesterol TO tissues; HDL helps carry cholesterol FROM tissues back to the liver."
    ]
   },
   {
    "h": "Spotting the steroid core (worked)",
    "items": [
     "Worked: given digoxin (attached sugars + a separate lactone + fused rings), trace only the rings that share edges. Count 6, 6, 6, 5 -> that 6-6-6-5 fused cluster is the steroid nucleus.",
     "Cholesterol = the same core + an -OH + a hydrocarbon tail, and is a precursor to steroid hormones.",
     "Remember: LDL delivers cholesterol to tissues; HDL helps return it to the liver."
    ]
   }
  ]
 },
 {
  "id": "ST_ch18_eicosanoids",
  "subjectId": "chem",
  "chapterId": "ch18",
  "topicId": "eicosanoids",
  "title": "Eicosanoids & NSAIDs",
  "overview": "Arachidonic acid feeding the COX and 5-LOX pathways, and where NSAIDs act.",
  "sections": [
   {
    "h": "Diagram: arachidonic acid to eicosanoids",
    "fig": "<svg viewBox=\"0 0 500 160\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><defs><marker id=\"ah\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#0f7d86\"/></marker></defs><g fill=\"#ffffff\" stroke=\"#0f7d86\" stroke-width=\"2\"><rect x=\"8\" y=\"62\" width=\"132\" height=\"36\" rx=\"8\"/><rect x=\"212\" y=\"26\" width=\"72\" height=\"32\" rx=\"8\"/><rect x=\"206\" y=\"104\" width=\"86\" height=\"32\" rx=\"8\"/><rect x=\"332\" y=\"26\" width=\"158\" height=\"32\" rx=\"8\"/><rect x=\"332\" y=\"104\" width=\"158\" height=\"32\" rx=\"8\"/></g><g stroke=\"#0f7d86\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#ah)\"><path d=\"M142,76 L208,46\"/><path d=\"M142,86 L202,120\"/><path d=\"M286,42 L328,42\"/><path d=\"M294,120 L328,120\"/></g><g font-size=\"13\" fill=\"#1f2d3a\" text-anchor=\"middle\"><text x=\"74\" y=\"84\">Arachidonic acid</text><text x=\"248\" y=\"46\">COX</text><text x=\"249\" y=\"124\">5-LOX</text><text x=\"411\" y=\"46\">Prostaglandins</text><text x=\"411\" y=\"124\">Leukotrienes</text></g><text x=\"212\" y=\"16\" font-size=\"13\" font-weight=\"700\" fill=\"#c0392b\">NSAIDs block COX</text></svg>",
    "figcap": "Arachidonic acid (20:4) feeds two paths: COX makes prostaglandins (pain / inflammation), 5-LOX makes leukotrienes. NSAIDs inhibit COX, lowering prostaglandins."
   },
   {
    "h": "Eicosanoids & NSAIDs",
    "items": [
     "Arachidonic acid (20:4) is the precursor. COX pathway -> prostaglandins (contribute to pain/inflammation); 5-LOX pathway -> leukotrienes.",
     "NSAIDs (nonsteroidal anti-inflammatory drugs) inhibit COX, which lowers prostaglandins.",
     "Remember: arachidonic acid feeds both pathways; COX -> prostaglandins, 5-LOX -> leukotrienes, NSAIDs act at COX."
    ]
   },
   {
    "h": "Tracing the pathway (worked)",
    "items": [
     "Worked: with a selective COX inhibitor, trace arachidonic acid (20:4) -> COX -> prostaglandins. Blocking COX lowers prostaglandins; the 5-LOX -> leukotriene branch is not the direct target.",
     "Remember: COX makes the prostaglandin branch; 5-LOX makes the leukotriene branch; NSAIDs act at COX."
    ]
   }
  ]
 },
 {
  "id": "ST_unit7_bisphenols",
  "subjectId": "chem",
  "chapterId": "unit7",
  "topicId": "bisphenols",
  "title": "Bisphenols & hormone mimics",
  "overview": "BPA, BPF, and BPS structure, and why their shared phenol groups let them mimic hormones.",
  "sections": [
   {
    "h": "Diagram: BPA vs BPF vs BPS",
    "fig": "<svg viewBox=\"0 0 560 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,Arial,sans-serif\"><g stroke=\"#1f2d3a\" stroke-width=\"2\" fill=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><polygon points=\"170,50 160,33 140,33 130,50 140,67 160,67\"/><circle cx=\"150\" cy=\"50\" r=\"11\"/><polygon points=\"400,50 390,33 370,33 360,50 370,67 390,67\"/><circle cx=\"380\" cy=\"50\" r=\"11\"/><line x1=\"118\" y1=\"50\" x2=\"130\" y2=\"50\"/><line x1=\"170\" y1=\"50\" x2=\"222\" y2=\"50\"/><line x1=\"316\" y1=\"50\" x2=\"360\" y2=\"50\"/><line x1=\"400\" y1=\"50\" x2=\"418\" y2=\"50\"/><polygon points=\"170,120 160,103 140,103 130,120 140,137 160,137\"/><circle cx=\"150\" cy=\"120\" r=\"11\"/><polygon points=\"400,120 390,103 370,103 360,120 370,137 390,137\"/><circle cx=\"380\" cy=\"120\" r=\"11\"/><line x1=\"118\" y1=\"120\" x2=\"130\" y2=\"120\"/><line x1=\"170\" y1=\"120\" x2=\"222\" y2=\"120\"/><line x1=\"316\" y1=\"120\" x2=\"360\" y2=\"120\"/><line x1=\"400\" y1=\"120\" x2=\"418\" y2=\"120\"/><polygon points=\"170,190 160,173 140,173 130,190 140,207 160,207\"/><circle cx=\"150\" cy=\"190\" r=\"11\"/><polygon points=\"400,190 390,173 370,173 360,190 370,207 390,207\"/><circle cx=\"380\" cy=\"190\" r=\"11\"/><line x1=\"118\" y1=\"190\" x2=\"130\" y2=\"190\"/><line x1=\"170\" y1=\"190\" x2=\"222\" y2=\"190\"/><line x1=\"316\" y1=\"190\" x2=\"360\" y2=\"190\"/><line x1=\"400\" y1=\"190\" x2=\"418\" y2=\"190\"/></g><g font-size=\"15\" fill=\"#1f2d3a\"><text x=\"88\" y=\"55\">HO</text><text x=\"424\" y=\"55\">OH</text><text x=\"88\" y=\"125\">HO</text><text x=\"424\" y=\"125\">OH</text><text x=\"88\" y=\"195\">HO</text><text x=\"424\" y=\"195\">OH</text></g><g font-size=\"14\" font-weight=\"700\" fill=\"#2563c9\" text-anchor=\"middle\"><text x=\"269\" y=\"55\">C(CH3)2</text><text x=\"269\" y=\"125\">CH2</text><text x=\"269\" y=\"195\">S(=O)2</text></g><g font-size=\"14\" font-weight=\"700\" fill=\"#0f7d86\"><text x=\"24\" y=\"55\">BPA</text><text x=\"24\" y=\"125\">BPF</text><text x=\"24\" y=\"195\">BPS</text></g></svg>",
    "figcap": "Same skeleton every time: two phenol rings (each HO opposite the bridge). Only the bridge changes - C(CH3)2 in BPA, CH2 in BPF, a sulfone SO2 in BPS (its two S=O oxygens add H-bond acceptors)."
   },
   {
    "h": "BPA / BPS / BPF structure",
    "items": [
     "All three have two benzene rings, each with one phenolic -OH opposite the bridge that connects the rings.",
     "Bridges differ: BPA = -C(CH3)2-, BPF = -CH2-, BPS = a sulfone bridge -S(=O)2-.",
     "Phenolic -OH groups hydrogen-bond with water; the aromatic rings limit water solubility (BPS's sulfone oxygens can also accept H-bonds)."
    ]
   },
   {
    "h": "Hormone mimicry & timing",
    "items": [
     "A hormone is a chemical messenger (growth, metabolism, reproduction). BPA can bind certain estrogen receptors and mimic some estrogen signals.",
     "Shared structure makes similar activity plausible; differences in the bridges can affect how strongly each molecule binds.",
     "Hormone signals act at low concentrations, and exposure TIMING matters because they guide development before birth and during puberty.",
     "Remember: shared phenolic groups explain possible similar activity; exposure during sensitive stages can matter even at low levels."
    ]
   }
  ]
 },
 {
  "id": "ST_skills_drawproduct",
  "subjectId": "chem",
  "chapterId": "skills",
  "topicId": "drawproduct",
  "title": "Reaction decision map (Ch 13-16)",
  "overview": "A fast if-then map for predicting the product of any Chapter 13-16 reaction.",
  "sections": [
   {
    "h": "Fast if-then rules",
    "items": [
     "C=C + Br2  -> vicinal dibromide        |   C=C + HBr -> Markovnikov bromoalkane",
     "C=C + H2/Pd -> alkane                  |   C=C + H2O/H+ -> Markovnikov alcohol",
     "1 deg alcohol + [O] -> aldehyde -> acid |  2 deg -> ketone  |  3 deg -> no reaction",
     "Aldehyde + [H] -> 1 deg alcohol         |  Ketone + [H] -> 2 deg alcohol  |  Aldehyde + [O] -> acid",
     "Aldehyde + ROH -> hemiacetal -> (+ROH) -> acetal",
     "2 R-SH + [O] -> disulfide               |  disulfide + [H] -> 2 thiols"
    ]
   },
   {
    "h": "Before answering any question",
    "items": [
     "1. Identify the functional groups.",
     "2. Mark the reacting carbon.",
     "3. Modify the bonds.",
     "4. Check that every carbon still has 4 bonds."
    ]
   },
   {
    "h": "Addition product (worked)",
    "items": [
     "Worked: cyclohexene + H2 (Ni). Find the ring C=C, add one H to each alkene carbon, change the double bond to single, keep the six-membered ring -> cyclohexane (1 mol H2 per mol cyclohexene).",
     "Remember: start at the functional group the reagent actually changes."
    ]
   }
  ]
 },
 {
  "id": "ST_math_exammath",
  "subjectId": "chem",
  "chapterId": "math",
  "topicId": "exammath",
  "title": "Formulas & math summary",
  "overview": "The structural counting rules and general formulas you need for the exam math.",
  "sections": [
   {
    "h": "Structural math (Ch 13-16)",
    "items": [
     "Alkane CnH(2n+2); one C=C CnH(2n); one C#C CnH(2n-2).",
     "Maximum stereoisomers = 2^n.",
     "Glucose = C6H12O6; monosaccharide pattern (CH2O)n."
    ]
   },
   {
    "h": "Handy general formulas",
    "items": [
     "Temperature: K = deg C + 273.15.    Density = mass / volume.",
     "Moles: n = mass / molar mass.    Mole ratio comes from balanced coefficients.",
     "pH = -log[H3O+];  pH + pOH = 14.    Dilution: C1V1 = C2V2.    Gas: PV = nRT (R = 0.082057)."
    ]
   },
   {
    "h": "Worked exam problems (given / rule / steps / answer)",
    "items": [
     "Molecular formula from unsaturation - Given: 5 carbons, one C=C. Rule: one C=C -> CnH(2n). Steps: n=5, 2n=10. Answer: C5H10.",
     "Dilution - Given: 2.0 M stock; make 50. mL of 0.50 M. Rule: C1V1 = C2V2. Steps: V1 = C2V2/C1 = (0.50 M x 50. mL)/(2.0 M) = 12.5 mL. Answer: measure 12.5 mL stock, add water to 50. mL.",
     "Moles - Given: 36 g glucose, molar mass 180 g/mol. Rule: n = mass/molar mass. Steps: n = 36 g / 180 g/mol = 0.20 mol. Answer: 0.20 mol.",
     "Stereoisomers - Given: 2 chiral centers. Rule: max stereoisomers = 2^n. Steps: 2^2 = 4. Answer: 4 stereoisomers."
    ]
   },
   {
    "h": "DBE with heteroatoms (worked)",
    "items": [
     "Worked: C4H7ClO. DBE = (2C + 2 + N - H - X)/2 with X = halogens, O omitted = (2x4 + 2 - 7 - 1)/2 = (10 - 8)/2 = 1.",
     "1 degree of unsaturation (a single C=O carbonyl could account for it).",
     "Remember: define the symbols and count atoms before plugging in; omit O and S, count halogens as X."
    ]
   }
  ]
 },
 {
  "id": "ST_math_moremath",
  "subjectId": "chem",
  "chapterId": "math",
  "topicId": "moremath",
  "title": "More math practice",
  "overview": "Extra general-chemistry calculations, each shown with the given values, the rule, the steps, and the final answer with units.",
  "sections": [
   {
    "h": "Worked examples",
    "items": [
     "pH - Given: [H3O+] = 1.0 x 10^-3 M. Rule: pH = -log[H3O+]. Steps: pH = -log(1.0e-3) = 3.0. Answer: pH = 3.0 (then pOH = 14 - 3 = 11).",
     "Density - Given: mass 24 g, volume 30. mL. Rule: d = m/V. Steps: d = 24 g / 30. mL = 0.80 g/mL. Answer: 0.80 g/mL.",
     "Temperature - Given: 25 deg C. Rule: K = deg C + 273.15. Steps: 25 + 273.15 = 298.15. Answer: 298.15 K.",
     "Ideal gas - Given: 1.0 mol gas, 1.0 atm, 273 K. Rule: PV = nRT (R = 0.082057). Steps: V = nRT/P = (1.0)(0.082057)(273)/1.0 = 22.4 L. Answer: 22.4 L."
    ]
   },
   {
    "h": "Remember",
    "items": [
     "Write the rule first, plug in with units, cancel units, then round. Carry units all the way to the final answer."
    ]
   }
  ]
 },
 {
  "id": "ST_bio7_all",
  "subjectId": "bio",
  "chapterId": "bio7",
  "topicId": "all",
  "title": "Gene expression & the lac operon",
  "overview": "From DNA to protein - replication, transcription, translation - and control by the lac operon.",
  "sections": [
   {
    "h": "DNA to protein: three processes",
    "items": [
     "Replication: DNA -> DNA (semiconservative; each daughter duplex keeps one old strand).",
     "Transcription: DNA -> RNA (RNA polymerase starts at a promoter; sigma factors help bacterial promoter recognition).",
     "Translation: mRNA -> protein (ribosomes read codons; tRNAs deliver amino acids).",
     "Both DNA and RNA polymerases build 5' -> 3'."
    ]
   },
   {
    "h": "Replication enzymes",
    "items": [
     "Helicase: unzip.  Primase: RNA primer.  DNA polymerase: extend from a free 3' OH.  Ligase: seal fragments.  Gyrase: relieve twisting.",
     "Leading strand is continuous; lagging strand uses Okazaki fragments."
    ]
   },
   {
    "h": "Translation landmarks",
    "items": [
     "Codon = 3 bases on mRNA; anticodon is on tRNA.",
     "AUG usually starts; UAA, UAG, UGA are stop codons. Amino acids are joined by peptide bonds.",
     "Ribosome sites: A = arrival, P = peptide (initiator tRNA starts here), E = exit."
    ]
   },
   {
    "h": "The lac operon (two controls)",
    "items": [
     "Parts: promoter (RNA polymerase start), operator (regulatory site), repressor (blocks), activator CAP-cAMP (helps). lacI makes the repressor; lacZ, lacY, lacA are the structural genes.",
     "Lactose absent -> OFF (repressor bound). Lactose present + glucose low -> HIGH.",
     "Allolactose (from lactose) inactivates the repressor. Low glucose -> high cAMP -> CAP-cAMP activates.",
     "Memory: lactose unlocks the gate; low glucose presses the accelerator."
    ]
   },
   {
    "h": "Sigma factors & bacteria vs eukaryotes",
    "items": [
     "An alternative sigma factor redirects RNA polymerase to a new set of promoters (a coordinated response) without changing the DNA.",
     "Bacteria: no nucleus, coupled transcription/translation, 70S ribosomes, operons.  Eukaryotes: nuclear transcription, 80S ribosomes, mRNA splicing (introns out, exons kept).",
     "DNA math: A pairs with T, G with C. If T = 20%, then C = 30%."
    ]
   },
   {
    "h": "Worked examples & key processes",
    "items": [
     "Base-pair math (Chargaff): in dsDNA, A = T and G = C. If T = 20%, then A = 20%, so G + C = 100% - 40% = 60% and C = 60%/2 = 30%.",
     "Central dogma: replication copies DNA -> DNA; transcription writes DNA -> RNA (RNA polymerase reads the template 3'->5' and builds RNA 5'->3'); translation reads mRNA -> protein.",
     "Replication order: 1) helicase opens the fork (gyrase relieves twisting ahead); 2) primase lays RNA primers; 3) DNA polymerase extends 5'->3' (continuous on the leading strand, Okazaki fragments on the lagging); 4) primers removed, gaps filled, ligase seals the nicks.",
     "Translation sites: A = arrival (incoming charged tRNA), P = holds the growing peptide, E = exit. The initiator tRNA starts in P (bacteria use fMet).",
     "Codon worked example: 5'-AUG CCU UAA-3' = AUG (Met / start) + CCU (Pro) + UAA (stop) -> a two-amino-acid peptide.",
     "lac operon (check lactose, then glucose): no lactose -> LacI repressor binds the operator -> very low expression. Lactose present -> allolactose lifts the repressor. Low glucose -> cAMP rises -> CAP-cAMP boosts transcription. (Lactose releases the brake; low glucose adds the boost.)",
     "Sigma factors: a different sigma sends RNA polymerase to a different set of promoters, letting bacteria switch programs. In eukaryotes transcription/processing happen in the nucleus and translation in the cytoplasm.",
     "Remember: replication copies, transcription makes RNA, translation builds protein."
    ]
   }
  ]
 },
 {
  "id": "ST_bio8_all",
  "subjectId": "bio",
  "chapterId": "bio8",
  "topicId": "all",
  "title": "Genetics, mutation & gene transfer",
  "overview": "Mutations, mutagens and repair, horizontal gene transfer, and selection tests like the Ames test.",
  "sections": [
   {
    "h": "Mutations (same / swap / stop / shift)",
    "items": [
     "Silent (synonymous): same amino acid.  Missense: different amino acid.  Nonsense: early STOP.  Frameshift: an insertion/deletion not divisible by 3.",
     "A 3-base indel adds/removes an amino acid but preserves the reading frame.",
     "Genotype = genetic makeup; phenotype = observable result. A reversion restores the phenotype (true back mutation vs a suppressor)."
    ]
   },
   {
    "h": "Mutagens & repair",
    "items": [
     "UV -> adjacent pyrimidine (thymine) dimers.  Base analog (5-bromouracil) = a fake T that can mispair.  Intercalators can cause indels.",
     "Repair: proofreading (3' -> 5' exonuclease), mismatch repair, nucleotide excision (remove, fill, seal)."
    ]
   },
   {
    "h": "Prototroph vs auxotroph & replica plating",
    "items": [
     "Prototroph: grows on minimal medium (GSA). Auxotroph: needs an added nutrient (e.g., Leu- needs leucine).",
     "Find auxotrophs by comparing the SAME colony position across plates: absence on GSA + rescue when the nutrient is added.",
     "Memory: no growth can mean starvation OR drug inhibition - check the nutrient before judging resistance."
    ]
   },
   {
    "h": "Three ways DNA moves (horizontal transfer)",
    "items": [
     "Transformation: a competent cell takes up naked environmental DNA.",
     "Transduction (phage): generalized = random packaging error; specialized = adjacent genes leave with an integrated prophage.",
     "Conjugation: DNA transfer by direct contact (often a plasmid). F+ donor, F- recipient, Hfr = F integrated, R plasmid = resistance, transposon = mobile/disruptive DNA."
    ]
   },
   {
    "h": "Selection & the Ames test",
    "items": [
     "Antibiotics SELECT pre-existing resistant variants; they do not create the exact needed mutation.",
     "Ames test: compare chemical-treated revertants to an untreated control. Many more revertants supports mutagenicity.",
     "Mutagen = causes mutations; carcinogen = causes cancer. A positive Ames result does not by itself prove human cancer."
    ]
   },
   {
    "h": "Worked examples & key processes",
    "items": [
     "Mutation types: silent (same amino acid), missense (swap), nonsense (new stop), frameshift (indel that shifts the reading frame).",
     "Frameshift test: a coding insertion/deletion shifts the frame if its length is NOT divisible by 3. A 4-base deletion -> 4/3 leaves remainder 1 -> frameshift. A 3-base deletion -> remainder 0 -> frame preserved.",
     "Mutation example on 5'-AUG UAU GAA UAA-3': UAU->UAC = silent; UAU->UGU = missense; UAU->UAA = nonsense; delete the first U and regroup = frameshift.",
     "Repair order: detect the damage in one strand -> excise the damaged segment -> use the intact opposite strand to fill the gap -> ligase seals the nick.",
     "Replica plating (set math): colonies on glucose-salts agar (GSA) = {1,2,3,9}; on GSA + leucine = {1,2,3,4,6,8,9}. Rescued only by leucine = {4,6,8} -> 3 leucine auxotrophs.",
     "Horizontal gene transfer: transformation (cell takes up free DNA), conjugation (donor-recipient contact), transduction (a phage carries DNA; generalized = random bacterial DNA packaged, specialized = adjacent genes from faulty prophage excision).",
     "Ames test (worked): 8 control revertants vs 160 treated = 160/8 = 20-fold increase -> supports mutagenicity. Frequency = 20 revertants / 1,000,000 cells = 0.00002 = 0.002%.",
     "Remember: same/swap/stop/shift tells you what happened; compare the treated plate to the untreated baseline."
    ]
   }
  ]
 },
 {
  "id": "ST_bio9_all",
  "subjectId": "bio",
  "chapterId": "bio9",
  "topicId": "all",
  "title": "Biotechnology",
  "overview": "The biotech toolkit: PCR, cloning, Sanger sequencing, gels, and microarrays.",
  "sections": [
   {
    "h": "PCR: separate, stick, synthesize",
    "items": [
     "Denature ~95 deg C (strands separate) -> Anneal ~50 deg C (primers bind) -> Extend ~72 deg C (Taq builds DNA 5' -> 3').",
     "Ingredients: template, two primers, thermostable polymerase (Taq), dNTPs, buffer/Mg2+. No ligase, helicase or primase needed.",
     "Copies: N = N0 x 2^cycles. From one duplex, 3 cycles -> 8 total duplexes."
    ]
   },
   {
    "h": "Tools (do not mix them up) & cloning",
    "items": [
     "Restriction enzyme = cut.  Ligase = seal.  Gel = size.  PCR = copy.  Sequencing = read bases.  Probe = find a matching sequence.",
     "Cloning order: extract DNA -> cut DNA and vector -> ligate the insert -> introduce into a host -> select, then verify.",
     "Selection trap: surviving an antibiotic means the cell has the resistance marker, NOT that it has the desired insert."
    ]
   },
   {
    "h": "cDNA, Sanger & gels",
    "items": [
     "Reverse transcriptase makes cDNA (DNA) from RNA; mature-mRNA cDNA lacks the spliced-out introns.",
     "Sanger: a ddNTP lacks a 3' OH, so extension stops; one primer per reaction; read shortest -> longest.",
     "Gel: DNA is negative and migrates toward the + electrode; smaller linear fragments travel farther."
    ]
   },
   {
    "h": "Microarrays & cloning a useful protein",
    "items": [
     "Expression microarray colors: reference = green, experimental = red. Red = higher experimental, yellow = both, dark = little signal. A transcript signal is NOT a direct protein count.",
     "Insulin example: put an intron-free human coding sequence with bacterial expression controls into E. coli; the shared genetic code lets bacterial ribosomes read it (active protein also needs processing/purification)."
    ]
   },
   {
    "h": "Worked examples & key processes",
    "items": [
     "PCR needs template, two primers (anneal on opposite strands, 3' ends pointing inward), thermostable polymerase (Taq), dNTPs, and buffer. Cycle: denature ~95 C -> anneal (primer-dependent temp) -> extend ~72 C; repeat.",
     "PCR amount (worked): molecules = starting x 2^cycles. 1 template x 2^3 = 8 copies after 3 ideal cycles.",
     "Cloning order: cut vector and insert to compatible ends -> ligase joins them -> introduce into a host -> select for plasmid-bearing colonies (resistance marker) -> screen / sequence for the correct insert. (A resistant colony can still carry an empty vector.)",
     "cDNA & Sanger: reverse transcriptase makes cDNA from mRNA; Sanger extends a primer with dNTPs + labeled ddNTPs (a ddNTP lacks the 3'-OH, so it stops the chain).",
     "Sanger read (worked): terminating bases from shortest to longest A, C, G, T -> new strand 5'-ACGT-3'. On a sizing gel, a band level with the 500-bp ladder band is about 500 bp.",
     "Microarray (worked): experimental red = 240, reference green = 80 -> red/green = 3.0-fold higher expression (a signal ratio, not an absolute protein count). Red = experimental higher, green = reference higher, yellow = both, dark = little signal.",
     "Remember: denature separates, anneal sticks, extend synthesizes; for cloning: cut, join, introduce, select, verify."
    ]
   }
  ]
 },
 {
  "id": "ST_bio10_all",
  "subjectId": "bio",
  "chapterId": "bio10",
  "topicId": "all",
  "title": "Classification & identification",
  "overview": "How microbes are classified and identified, from dichotomous keys to molecular clues.",
  "sections": [
   {
    "h": "Three big tasks & evidence",
    "items": [
     "Classification = group organisms. Identification = assign an unknown to a group. Strain typing = distinguish variants.",
     "Three domains: Bacteria, Archaea, Eukarya (based on small-subunit / 16S rRNA).",
     "Phenotypic: Gram stain, shape, colony, metabolism/enzyme tests (catalase, oxidase, coagulase, lactose). Genotypic: 16S rRNA sequence, DNA probe, DNA hybridization, G+C content, genome comparison."
    ]
   },
   {
    "h": "Five ways to type a strain",
    "items": [
     "Biochemical = metabolism.  Serological = antigens via antibodies.  Molecular = DNA patterns.  Phage = virus susceptibility.  Antibiogram = antibiotic susceptibility pattern.",
     "Similar disease or habitat alone does NOT prove close evolutionary relatedness."
    ]
   },
   {
    "h": "Reading the dichotomous key & tests",
    "items": [
     "Gram- rod, oxidase + -> Pseudomonas aeruginosa.  Gram- rod, oxidase -, lactose acid/gas + -> E. coli or another coliform.  Gram- rod, oxidase -, lactose - -> Proteus.",
     "Gram+ coccus, catalase - -> Enterococcus.  catalase +, coagulase + -> S. aureus.  catalase +, coagulase - -> S. saprophyticus.",
     "Catalase: bubbles when H2O2 is added (O2).  Oxidase: color = cytochrome oxidase.  Lactose: acid lowers pH, gas = fermentation.  Coagulase: clot."
    ]
   },
   {
    "h": "Molecular clues",
    "items": [
     "16S rRNA gene: a bacterial marker (conserved + variable regions). Higher G+C generally means a higher DNA melting temperature.",
     "An identical short 16S does NOT prove the same strain - combine sequence quality, coverage and phenotype.",
     "BLAST finds similar database sequences; Clustal aligns multiple sequences. A top hit is evidence, not automatic proof."
    ]
   },
   {
    "h": "Worked examples & key processes",
    "items": [
     "Three tasks: classification (group organisms), identification (name an unknown), strain typing (tell isolates of one species apart).",
     "Five typing methods matched to their evidence: biochemical (metabolic reactions), serological (antigen-antibody), molecular (DNA pattern/sequence), phage typing (susceptibility to specific phages), antibiogram (antibiotic-susceptibility pattern).",
     "Dichotomous key (example path): Gram-negative rod -> oxidase positive (Pseudomonas) or negative; if negative, lactose acid/gas positive (E. coli / coliform) or negative (Proteus). Follow one branch per test result.",
     "16S identity (worked): 98 matches over a 100-base aligned region = 98% identity. Coverage = 100 aligned / 500 query = 20%. High identity still needs adequate coverage and quality to support an ID.",
     "GC content (worked): 36 G + 34 C in 200 bases = (36 + 34)/200 = 35% GC.",
     "Viable plate count (worked): three 1:10 dilutions = 10^-3 total; 0.10 mL plated; 72 colonies. Original = 72 / (0.10 mL x 10^-3) = 72 / 0.00010 = 7.2 x 10^5 CFU/mL.",
     "Remember: match the typing name to the feature it measures; for CFU, divide by the volume plated and by the dilution."
    ]
   }
  ]
 },
 {
  "id": "ST_skills_readstructure",
  "subjectId": "chem",
  "chapterId": "skills",
  "topicId": "readstructure",
  "title": "Read the structure (Ch 13-16)",
  "overview": "How to read a line-angle (skeletal) drawing: find the carbons, fill in the hidden hydrogens, and name the functional group.",
  "sections": [
   {
    "h": "Reading a line-angle drawing",
    "items": [
     "Every line end and every corner is a carbon. A plain line is a single bond; two parallel lines = a double bond; three = a triple bond.",
     "Each carbon is assumed to carry enough H atoms to reach 4 bonds total. Only N, O, S (and their H) are drawn explicitly.",
     "Find the functional group first (C=O, -OH, -COOH, C=C, ring), then number the longest chain that contains it."
    ]
   },
   {
    "h": "Worked example",
    "items": [
     "Given a three-carbon zigzag ending in C(=O)OH: the acid carbon is C1, the corner is C2 (CH2), the far endpoint is C3 (CH3).",
     "That is CH3CH2COOH = propanoic acid (3 carbons).",
     "Remember: count atoms first, then use the neighboring atoms to identify the group."
    ]
   }
  ]
 },
 {
  "id": "ST_skills_formulas",
  "subjectId": "chem",
  "chapterId": "skills",
  "topicId": "formulas",
  "title": "Formulas & counting (Ch 13-16)",
  "overview": "Molecular-formula patterns and degrees of unsaturation (DBE) for simple hydrocarbons.",
  "sections": [
   {
    "h": "Formula patterns",
    "items": [
     "Alkane = CnH(2n+2); one C=C -> CnH(2n); one C#C (triple bond) -> CnH(2n-2).",
     "Degrees of unsaturation (DBE) = rings + pi bonds. One ring or one double bond = 1 DBE; one triple bond = 2.",
     "General: DBE = (2C + 2 + N - H - X)/2, where X = halogens. O and S are omitted."
    ]
   },
   {
    "h": "Worked example",
    "items": [
     "Given C5H8: DBE = (2x5 + 2 - 8)/2 = (12 - 8)/2 = 2.",
     "So C5H8 has 2 degrees of unsaturation (for example one ring + one C=C, or one triple bond).",
     "Remember: one ring or double bond adds 1 DBE; one triple bond adds 2."
    ]
   }
  ]
 },
 {
  "id": "ST_skills_esters",
  "subjectId": "chem",
  "chapterId": "skills",
  "topicId": "esters",
  "title": "Esters & biomolecules (optional)",
  "overview": "Spotting the ester pattern C(=O)-O-C and reading its name. (See Chapter 17 for how esters form and break.)",
  "sections": [
   {
    "h": "Recognize an ester",
    "items": [
     "An ester is the C(=O)-O-C pattern. The carbonyl-containing piece comes from the acid; the group beyond the single-bond oxygen comes from the alcohol.",
     "Name it alcohol-part first (as an alkyl), then the acid part as -anoate.",
     "For reaction conditions (esterification, acidic hydrolysis, saponification) see Chapter 17."
    ]
   },
   {
    "h": "Worked example",
    "items": [
     "Given CH3CH2C(=O)OCH3: acid side = CH3CH2C(=O)- (propanoate); alcohol side = -OCH3 (methyl).",
     "Name: methyl propanoate.",
     "Remember: the group on the single-bond oxygen gives the first word of the ester name."
    ]
   }
  ]
 }
];
