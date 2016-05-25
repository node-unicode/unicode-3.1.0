# Unicode v3.1.0 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v3.1.0’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).**

## Installation

```bash
npm install unicode-3.1.0 --save-dev
```

**Note:** _unicode-3.1.0_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
const regenerate = require('regenerate');
const set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
const codePoints = require('unicode-3.1.0/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
const symbols = require('unicode-3.1.0/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
const regex = require('unicode-3.1.0/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
const category = require('unicode-3.1.0/categories')[ 0x41 ];
// Get an array of all code points with `Bidi_Class=Other_Neutral`:
const on = require('unicode-3.1.0/bidi-classes/Other_Neutral/code-points');
// Get a map from code points to bidi classes:
const bidiClassMap = require('unicode-3.1.0/bidi-classes');
// Get the directionality of a given code point:
const directionality = require('unicode-3.1.0/bidi-classes').get(0x41);

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v3.1.0:

```js
// properties:

require('unicode-3.1.0/properties/ASCII/code-points');
require('unicode-3.1.0/properties/ASCII/symbols');
require('unicode-3.1.0/properties/ASCII/regex');

require('unicode-3.1.0/properties/Alphabetic/code-points');
require('unicode-3.1.0/properties/Alphabetic/symbols');
require('unicode-3.1.0/properties/Alphabetic/regex');

require('unicode-3.1.0/properties/Any/code-points');
require('unicode-3.1.0/properties/Any/symbols');
require('unicode-3.1.0/properties/Any/regex');

require('unicode-3.1.0/properties/Assigned/code-points');
require('unicode-3.1.0/properties/Assigned/symbols');
require('unicode-3.1.0/properties/Assigned/regex');

require('unicode-3.1.0/properties/Bidi_Control/code-points');
require('unicode-3.1.0/properties/Bidi_Control/symbols');
require('unicode-3.1.0/properties/Bidi_Control/regex');

require('unicode-3.1.0/properties/Bidi_Mirrored/code-points');
require('unicode-3.1.0/properties/Bidi_Mirrored/symbols');
require('unicode-3.1.0/properties/Bidi_Mirrored/regex');

require('unicode-3.1.0/properties/Dash/code-points');
require('unicode-3.1.0/properties/Dash/symbols');
require('unicode-3.1.0/properties/Dash/regex');

require('unicode-3.1.0/properties/Diacritic/code-points');
require('unicode-3.1.0/properties/Diacritic/symbols');
require('unicode-3.1.0/properties/Diacritic/regex');

require('unicode-3.1.0/properties/Expands_On_NFC/code-points');
require('unicode-3.1.0/properties/Expands_On_NFC/symbols');
require('unicode-3.1.0/properties/Expands_On_NFC/regex');

require('unicode-3.1.0/properties/Expands_On_NFD/code-points');
require('unicode-3.1.0/properties/Expands_On_NFD/symbols');
require('unicode-3.1.0/properties/Expands_On_NFD/regex');

require('unicode-3.1.0/properties/Expands_On_NFKC/code-points');
require('unicode-3.1.0/properties/Expands_On_NFKC/symbols');
require('unicode-3.1.0/properties/Expands_On_NFKC/regex');

require('unicode-3.1.0/properties/Expands_On_NFKD/code-points');
require('unicode-3.1.0/properties/Expands_On_NFKD/symbols');
require('unicode-3.1.0/properties/Expands_On_NFKD/regex');

require('unicode-3.1.0/properties/Extender/code-points');
require('unicode-3.1.0/properties/Extender/symbols');
require('unicode-3.1.0/properties/Extender/regex');

require('unicode-3.1.0/properties/FC_NFKC_Closure/code-points');
require('unicode-3.1.0/properties/FC_NFKC_Closure/symbols');
require('unicode-3.1.0/properties/FC_NFKC_Closure/regex');

require('unicode-3.1.0/properties/Full_Composition_Exclusion/code-points');
require('unicode-3.1.0/properties/Full_Composition_Exclusion/symbols');
require('unicode-3.1.0/properties/Full_Composition_Exclusion/regex');

require('unicode-3.1.0/properties/Hex_Digit/code-points');
require('unicode-3.1.0/properties/Hex_Digit/symbols');
require('unicode-3.1.0/properties/Hex_Digit/regex');

require('unicode-3.1.0/properties/Hyphen/code-points');
require('unicode-3.1.0/properties/Hyphen/symbols');
require('unicode-3.1.0/properties/Hyphen/regex');

require('unicode-3.1.0/properties/ID_Continue/code-points');
require('unicode-3.1.0/properties/ID_Continue/symbols');
require('unicode-3.1.0/properties/ID_Continue/regex');

require('unicode-3.1.0/properties/ID_Start/code-points');
require('unicode-3.1.0/properties/ID_Start/symbols');
require('unicode-3.1.0/properties/ID_Start/regex');

require('unicode-3.1.0/properties/Ideographic/code-points');
require('unicode-3.1.0/properties/Ideographic/symbols');
require('unicode-3.1.0/properties/Ideographic/regex');

require('unicode-3.1.0/properties/Join_Control/code-points');
require('unicode-3.1.0/properties/Join_Control/symbols');
require('unicode-3.1.0/properties/Join_Control/regex');

require('unicode-3.1.0/properties/Lowercase/code-points');
require('unicode-3.1.0/properties/Lowercase/symbols');
require('unicode-3.1.0/properties/Lowercase/regex');

require('unicode-3.1.0/properties/Math/code-points');
require('unicode-3.1.0/properties/Math/symbols');
require('unicode-3.1.0/properties/Math/regex');

require('unicode-3.1.0/properties/NFC_MAYBE/code-points');
require('unicode-3.1.0/properties/NFC_MAYBE/symbols');
require('unicode-3.1.0/properties/NFC_MAYBE/regex');

require('unicode-3.1.0/properties/NFC_NO/code-points');
require('unicode-3.1.0/properties/NFC_NO/symbols');
require('unicode-3.1.0/properties/NFC_NO/regex');

require('unicode-3.1.0/properties/NFD_NO/code-points');
require('unicode-3.1.0/properties/NFD_NO/symbols');
require('unicode-3.1.0/properties/NFD_NO/regex');

require('unicode-3.1.0/properties/NFKC_MAYBE/code-points');
require('unicode-3.1.0/properties/NFKC_MAYBE/symbols');
require('unicode-3.1.0/properties/NFKC_MAYBE/regex');

require('unicode-3.1.0/properties/NFKC_NO/code-points');
require('unicode-3.1.0/properties/NFKC_NO/symbols');
require('unicode-3.1.0/properties/NFKC_NO/regex');

require('unicode-3.1.0/properties/NFKD_NO/code-points');
require('unicode-3.1.0/properties/NFKD_NO/symbols');
require('unicode-3.1.0/properties/NFKD_NO/regex');

require('unicode-3.1.0/properties/Noncharacter_Code_Point/code-points');
require('unicode-3.1.0/properties/Noncharacter_Code_Point/symbols');
require('unicode-3.1.0/properties/Noncharacter_Code_Point/regex');

require('unicode-3.1.0/properties/Other_Alphabetic/code-points');
require('unicode-3.1.0/properties/Other_Alphabetic/symbols');
require('unicode-3.1.0/properties/Other_Alphabetic/regex');

require('unicode-3.1.0/properties/Other_Lowercase/code-points');
require('unicode-3.1.0/properties/Other_Lowercase/symbols');
require('unicode-3.1.0/properties/Other_Lowercase/regex');

require('unicode-3.1.0/properties/Other_Math/code-points');
require('unicode-3.1.0/properties/Other_Math/symbols');
require('unicode-3.1.0/properties/Other_Math/regex');

require('unicode-3.1.0/properties/Other_Uppercase/code-points');
require('unicode-3.1.0/properties/Other_Uppercase/symbols');
require('unicode-3.1.0/properties/Other_Uppercase/regex');

require('unicode-3.1.0/properties/Quotation_Mark/code-points');
require('unicode-3.1.0/properties/Quotation_Mark/symbols');
require('unicode-3.1.0/properties/Quotation_Mark/regex');

require('unicode-3.1.0/properties/Terminal_Punctuation/code-points');
require('unicode-3.1.0/properties/Terminal_Punctuation/symbols');
require('unicode-3.1.0/properties/Terminal_Punctuation/regex');

require('unicode-3.1.0/properties/Uppercase/code-points');
require('unicode-3.1.0/properties/Uppercase/symbols');
require('unicode-3.1.0/properties/Uppercase/regex');

require('unicode-3.1.0/properties/White_space/code-points');
require('unicode-3.1.0/properties/White_space/symbols');
require('unicode-3.1.0/properties/White_space/regex');

require('unicode-3.1.0/properties/XID_Continue/code-points');
require('unicode-3.1.0/properties/XID_Continue/symbols');
require('unicode-3.1.0/properties/XID_Continue/regex');

require('unicode-3.1.0/properties/XID_Start/code-points');
require('unicode-3.1.0/properties/XID_Start/symbols');
require('unicode-3.1.0/properties/XID_Start/regex');

// categories:

require('unicode-3.1.0/categories').get(codePoint); // lookup map

require('unicode-3.1.0/categories/C/code-points');
require('unicode-3.1.0/categories/C/symbols');
require('unicode-3.1.0/categories/C/regex');

require('unicode-3.1.0/categories/Cc/code-points');
require('unicode-3.1.0/categories/Cc/symbols');
require('unicode-3.1.0/categories/Cc/regex');

require('unicode-3.1.0/categories/Cf/code-points');
require('unicode-3.1.0/categories/Cf/symbols');
require('unicode-3.1.0/categories/Cf/regex');

require('unicode-3.1.0/categories/Cn/code-points');
require('unicode-3.1.0/categories/Cn/symbols');
require('unicode-3.1.0/categories/Cn/regex');

require('unicode-3.1.0/categories/Co/code-points');
require('unicode-3.1.0/categories/Co/symbols');
require('unicode-3.1.0/categories/Co/regex');

require('unicode-3.1.0/categories/Cs/code-points');
require('unicode-3.1.0/categories/Cs/symbols');
require('unicode-3.1.0/categories/Cs/regex');

require('unicode-3.1.0/categories/L/code-points');
require('unicode-3.1.0/categories/L/symbols');
require('unicode-3.1.0/categories/L/regex');

require('unicode-3.1.0/categories/LC/code-points');
require('unicode-3.1.0/categories/LC/symbols');
require('unicode-3.1.0/categories/LC/regex');

require('unicode-3.1.0/categories/Ll/code-points');
require('unicode-3.1.0/categories/Ll/symbols');
require('unicode-3.1.0/categories/Ll/regex');

require('unicode-3.1.0/categories/Lm/code-points');
require('unicode-3.1.0/categories/Lm/symbols');
require('unicode-3.1.0/categories/Lm/regex');

require('unicode-3.1.0/categories/Lo/code-points');
require('unicode-3.1.0/categories/Lo/symbols');
require('unicode-3.1.0/categories/Lo/regex');

require('unicode-3.1.0/categories/Lt/code-points');
require('unicode-3.1.0/categories/Lt/symbols');
require('unicode-3.1.0/categories/Lt/regex');

require('unicode-3.1.0/categories/Lu/code-points');
require('unicode-3.1.0/categories/Lu/symbols');
require('unicode-3.1.0/categories/Lu/regex');

require('unicode-3.1.0/categories/M/code-points');
require('unicode-3.1.0/categories/M/symbols');
require('unicode-3.1.0/categories/M/regex');

require('unicode-3.1.0/categories/Mc/code-points');
require('unicode-3.1.0/categories/Mc/symbols');
require('unicode-3.1.0/categories/Mc/regex');

require('unicode-3.1.0/categories/Me/code-points');
require('unicode-3.1.0/categories/Me/symbols');
require('unicode-3.1.0/categories/Me/regex');

require('unicode-3.1.0/categories/Mn/code-points');
require('unicode-3.1.0/categories/Mn/symbols');
require('unicode-3.1.0/categories/Mn/regex');

require('unicode-3.1.0/categories/N/code-points');
require('unicode-3.1.0/categories/N/symbols');
require('unicode-3.1.0/categories/N/regex');

require('unicode-3.1.0/categories/Nd/code-points');
require('unicode-3.1.0/categories/Nd/symbols');
require('unicode-3.1.0/categories/Nd/regex');

require('unicode-3.1.0/categories/Nl/code-points');
require('unicode-3.1.0/categories/Nl/symbols');
require('unicode-3.1.0/categories/Nl/regex');

require('unicode-3.1.0/categories/No/code-points');
require('unicode-3.1.0/categories/No/symbols');
require('unicode-3.1.0/categories/No/regex');

require('unicode-3.1.0/categories/P/code-points');
require('unicode-3.1.0/categories/P/symbols');
require('unicode-3.1.0/categories/P/regex');

require('unicode-3.1.0/categories/Pc/code-points');
require('unicode-3.1.0/categories/Pc/symbols');
require('unicode-3.1.0/categories/Pc/regex');

require('unicode-3.1.0/categories/Pd/code-points');
require('unicode-3.1.0/categories/Pd/symbols');
require('unicode-3.1.0/categories/Pd/regex');

require('unicode-3.1.0/categories/Pe/code-points');
require('unicode-3.1.0/categories/Pe/symbols');
require('unicode-3.1.0/categories/Pe/regex');

require('unicode-3.1.0/categories/Pf/code-points');
require('unicode-3.1.0/categories/Pf/symbols');
require('unicode-3.1.0/categories/Pf/regex');

require('unicode-3.1.0/categories/Pi/code-points');
require('unicode-3.1.0/categories/Pi/symbols');
require('unicode-3.1.0/categories/Pi/regex');

require('unicode-3.1.0/categories/Po/code-points');
require('unicode-3.1.0/categories/Po/symbols');
require('unicode-3.1.0/categories/Po/regex');

require('unicode-3.1.0/categories/Ps/code-points');
require('unicode-3.1.0/categories/Ps/symbols');
require('unicode-3.1.0/categories/Ps/regex');

require('unicode-3.1.0/categories/S/code-points');
require('unicode-3.1.0/categories/S/symbols');
require('unicode-3.1.0/categories/S/regex');

require('unicode-3.1.0/categories/Sc/code-points');
require('unicode-3.1.0/categories/Sc/symbols');
require('unicode-3.1.0/categories/Sc/regex');

require('unicode-3.1.0/categories/Sk/code-points');
require('unicode-3.1.0/categories/Sk/symbols');
require('unicode-3.1.0/categories/Sk/regex');

require('unicode-3.1.0/categories/Sm/code-points');
require('unicode-3.1.0/categories/Sm/symbols');
require('unicode-3.1.0/categories/Sm/regex');

require('unicode-3.1.0/categories/So/code-points');
require('unicode-3.1.0/categories/So/symbols');
require('unicode-3.1.0/categories/So/regex');

require('unicode-3.1.0/categories/Z/code-points');
require('unicode-3.1.0/categories/Z/symbols');
require('unicode-3.1.0/categories/Z/regex');

require('unicode-3.1.0/categories/Zl/code-points');
require('unicode-3.1.0/categories/Zl/symbols');
require('unicode-3.1.0/categories/Zl/regex');

require('unicode-3.1.0/categories/Zp/code-points');
require('unicode-3.1.0/categories/Zp/symbols');
require('unicode-3.1.0/categories/Zp/regex');

require('unicode-3.1.0/categories/Zs/code-points');
require('unicode-3.1.0/categories/Zs/symbols');
require('unicode-3.1.0/categories/Zs/regex');

// bidi classes:

require('unicode-3.1.0/bidi-classes').get(codePoint); // lookup map

require('unicode-3.1.0/bidi-classes/Arabic_Letter/code-points');
require('unicode-3.1.0/bidi-classes/Arabic_Letter/symbols');
require('unicode-3.1.0/bidi-classes/Arabic_Letter/regex');

require('unicode-3.1.0/bidi-classes/Arabic_Number/code-points');
require('unicode-3.1.0/bidi-classes/Arabic_Number/symbols');
require('unicode-3.1.0/bidi-classes/Arabic_Number/regex');

require('unicode-3.1.0/bidi-classes/Boundary_Neutral/code-points');
require('unicode-3.1.0/bidi-classes/Boundary_Neutral/symbols');
require('unicode-3.1.0/bidi-classes/Boundary_Neutral/regex');

require('unicode-3.1.0/bidi-classes/Common_Separator/code-points');
require('unicode-3.1.0/bidi-classes/Common_Separator/symbols');
require('unicode-3.1.0/bidi-classes/Common_Separator/regex');

require('unicode-3.1.0/bidi-classes/European_Number/code-points');
require('unicode-3.1.0/bidi-classes/European_Number/symbols');
require('unicode-3.1.0/bidi-classes/European_Number/regex');

require('unicode-3.1.0/bidi-classes/European_Separator/code-points');
require('unicode-3.1.0/bidi-classes/European_Separator/symbols');
require('unicode-3.1.0/bidi-classes/European_Separator/regex');

require('unicode-3.1.0/bidi-classes/European_Terminator/code-points');
require('unicode-3.1.0/bidi-classes/European_Terminator/symbols');
require('unicode-3.1.0/bidi-classes/European_Terminator/regex');

require('unicode-3.1.0/bidi-classes/Left_To_Right/code-points');
require('unicode-3.1.0/bidi-classes/Left_To_Right/symbols');
require('unicode-3.1.0/bidi-classes/Left_To_Right/regex');

require('unicode-3.1.0/bidi-classes/Left_To_Right_Embedding/code-points');
require('unicode-3.1.0/bidi-classes/Left_To_Right_Embedding/symbols');
require('unicode-3.1.0/bidi-classes/Left_To_Right_Embedding/regex');

require('unicode-3.1.0/bidi-classes/Left_To_Right_Override/code-points');
require('unicode-3.1.0/bidi-classes/Left_To_Right_Override/symbols');
require('unicode-3.1.0/bidi-classes/Left_To_Right_Override/regex');

require('unicode-3.1.0/bidi-classes/Nonspacing_Mark/code-points');
require('unicode-3.1.0/bidi-classes/Nonspacing_Mark/symbols');
require('unicode-3.1.0/bidi-classes/Nonspacing_Mark/regex');

require('unicode-3.1.0/bidi-classes/Other_Neutral/code-points');
require('unicode-3.1.0/bidi-classes/Other_Neutral/symbols');
require('unicode-3.1.0/bidi-classes/Other_Neutral/regex');

require('unicode-3.1.0/bidi-classes/Paragraph_Separator/code-points');
require('unicode-3.1.0/bidi-classes/Paragraph_Separator/symbols');
require('unicode-3.1.0/bidi-classes/Paragraph_Separator/regex');

require('unicode-3.1.0/bidi-classes/Pop_Directional_Format/code-points');
require('unicode-3.1.0/bidi-classes/Pop_Directional_Format/symbols');
require('unicode-3.1.0/bidi-classes/Pop_Directional_Format/regex');

require('unicode-3.1.0/bidi-classes/Right_To_Left/code-points');
require('unicode-3.1.0/bidi-classes/Right_To_Left/symbols');
require('unicode-3.1.0/bidi-classes/Right_To_Left/regex');

require('unicode-3.1.0/bidi-classes/Right_To_Left_Embedding/code-points');
require('unicode-3.1.0/bidi-classes/Right_To_Left_Embedding/symbols');
require('unicode-3.1.0/bidi-classes/Right_To_Left_Embedding/regex');

require('unicode-3.1.0/bidi-classes/Right_To_Left_Override/code-points');
require('unicode-3.1.0/bidi-classes/Right_To_Left_Override/symbols');
require('unicode-3.1.0/bidi-classes/Right_To_Left_Override/regex');

require('unicode-3.1.0/bidi-classes/Segment_Separator/code-points');
require('unicode-3.1.0/bidi-classes/Segment_Separator/symbols');
require('unicode-3.1.0/bidi-classes/Segment_Separator/regex');

require('unicode-3.1.0/bidi-classes/White_Space/code-points');
require('unicode-3.1.0/bidi-classes/White_Space/symbols');
require('unicode-3.1.0/bidi-classes/White_Space/regex');

// scripts:

require('unicode-3.1.0/scripts/ARABIC/code-points');
require('unicode-3.1.0/scripts/ARABIC/symbols');
require('unicode-3.1.0/scripts/ARABIC/regex');

require('unicode-3.1.0/scripts/ARMENIAN/code-points');
require('unicode-3.1.0/scripts/ARMENIAN/symbols');
require('unicode-3.1.0/scripts/ARMENIAN/regex');

require('unicode-3.1.0/scripts/BENGALI/code-points');
require('unicode-3.1.0/scripts/BENGALI/symbols');
require('unicode-3.1.0/scripts/BENGALI/regex');

require('unicode-3.1.0/scripts/BOPOMOFO/code-points');
require('unicode-3.1.0/scripts/BOPOMOFO/symbols');
require('unicode-3.1.0/scripts/BOPOMOFO/regex');

require('unicode-3.1.0/scripts/CANADIAN-ABORIGINAL/code-points');
require('unicode-3.1.0/scripts/CANADIAN-ABORIGINAL/symbols');
require('unicode-3.1.0/scripts/CANADIAN-ABORIGINAL/regex');

require('unicode-3.1.0/scripts/CHEROKEE/code-points');
require('unicode-3.1.0/scripts/CHEROKEE/symbols');
require('unicode-3.1.0/scripts/CHEROKEE/regex');

require('unicode-3.1.0/scripts/CYRILLIC/code-points');
require('unicode-3.1.0/scripts/CYRILLIC/symbols');
require('unicode-3.1.0/scripts/CYRILLIC/regex');

require('unicode-3.1.0/scripts/DESERET/code-points');
require('unicode-3.1.0/scripts/DESERET/symbols');
require('unicode-3.1.0/scripts/DESERET/regex');

require('unicode-3.1.0/scripts/DEVANAGARI/code-points');
require('unicode-3.1.0/scripts/DEVANAGARI/symbols');
require('unicode-3.1.0/scripts/DEVANAGARI/regex');

require('unicode-3.1.0/scripts/ETHIOPIC/code-points');
require('unicode-3.1.0/scripts/ETHIOPIC/symbols');
require('unicode-3.1.0/scripts/ETHIOPIC/regex');

require('unicode-3.1.0/scripts/GEORGIAN/code-points');
require('unicode-3.1.0/scripts/GEORGIAN/symbols');
require('unicode-3.1.0/scripts/GEORGIAN/regex');

require('unicode-3.1.0/scripts/GOTHIC/code-points');
require('unicode-3.1.0/scripts/GOTHIC/symbols');
require('unicode-3.1.0/scripts/GOTHIC/regex');

require('unicode-3.1.0/scripts/GREEK/code-points');
require('unicode-3.1.0/scripts/GREEK/symbols');
require('unicode-3.1.0/scripts/GREEK/regex');

require('unicode-3.1.0/scripts/GUJARATI/code-points');
require('unicode-3.1.0/scripts/GUJARATI/symbols');
require('unicode-3.1.0/scripts/GUJARATI/regex');

require('unicode-3.1.0/scripts/GURMUKHI/code-points');
require('unicode-3.1.0/scripts/GURMUKHI/symbols');
require('unicode-3.1.0/scripts/GURMUKHI/regex');

require('unicode-3.1.0/scripts/HAN/code-points');
require('unicode-3.1.0/scripts/HAN/symbols');
require('unicode-3.1.0/scripts/HAN/regex');

require('unicode-3.1.0/scripts/HANGUL/code-points');
require('unicode-3.1.0/scripts/HANGUL/symbols');
require('unicode-3.1.0/scripts/HANGUL/regex');

require('unicode-3.1.0/scripts/HEBREW/code-points');
require('unicode-3.1.0/scripts/HEBREW/symbols');
require('unicode-3.1.0/scripts/HEBREW/regex');

require('unicode-3.1.0/scripts/HIRAGANA/code-points');
require('unicode-3.1.0/scripts/HIRAGANA/symbols');
require('unicode-3.1.0/scripts/HIRAGANA/regex');

require('unicode-3.1.0/scripts/INHERITED/code-points');
require('unicode-3.1.0/scripts/INHERITED/symbols');
require('unicode-3.1.0/scripts/INHERITED/regex');

require('unicode-3.1.0/scripts/KANNADA/code-points');
require('unicode-3.1.0/scripts/KANNADA/symbols');
require('unicode-3.1.0/scripts/KANNADA/regex');

require('unicode-3.1.0/scripts/KATAKANA/code-points');
require('unicode-3.1.0/scripts/KATAKANA/symbols');
require('unicode-3.1.0/scripts/KATAKANA/regex');

require('unicode-3.1.0/scripts/KHMER/code-points');
require('unicode-3.1.0/scripts/KHMER/symbols');
require('unicode-3.1.0/scripts/KHMER/regex');

require('unicode-3.1.0/scripts/LAO/code-points');
require('unicode-3.1.0/scripts/LAO/symbols');
require('unicode-3.1.0/scripts/LAO/regex');

require('unicode-3.1.0/scripts/LATIN/code-points');
require('unicode-3.1.0/scripts/LATIN/symbols');
require('unicode-3.1.0/scripts/LATIN/regex');

require('unicode-3.1.0/scripts/MALAYALAM/code-points');
require('unicode-3.1.0/scripts/MALAYALAM/symbols');
require('unicode-3.1.0/scripts/MALAYALAM/regex');

require('unicode-3.1.0/scripts/MONGOLIAN/code-points');
require('unicode-3.1.0/scripts/MONGOLIAN/symbols');
require('unicode-3.1.0/scripts/MONGOLIAN/regex');

require('unicode-3.1.0/scripts/MYANMAR/code-points');
require('unicode-3.1.0/scripts/MYANMAR/symbols');
require('unicode-3.1.0/scripts/MYANMAR/regex');

require('unicode-3.1.0/scripts/OGHAM/code-points');
require('unicode-3.1.0/scripts/OGHAM/symbols');
require('unicode-3.1.0/scripts/OGHAM/regex');

require('unicode-3.1.0/scripts/OLD-ITALIC/code-points');
require('unicode-3.1.0/scripts/OLD-ITALIC/symbols');
require('unicode-3.1.0/scripts/OLD-ITALIC/regex');

require('unicode-3.1.0/scripts/ORIYA/code-points');
require('unicode-3.1.0/scripts/ORIYA/symbols');
require('unicode-3.1.0/scripts/ORIYA/regex');

require('unicode-3.1.0/scripts/RUNIC/code-points');
require('unicode-3.1.0/scripts/RUNIC/symbols');
require('unicode-3.1.0/scripts/RUNIC/regex');

require('unicode-3.1.0/scripts/SINHALA/code-points');
require('unicode-3.1.0/scripts/SINHALA/symbols');
require('unicode-3.1.0/scripts/SINHALA/regex');

require('unicode-3.1.0/scripts/SYRIAC/code-points');
require('unicode-3.1.0/scripts/SYRIAC/symbols');
require('unicode-3.1.0/scripts/SYRIAC/regex');

require('unicode-3.1.0/scripts/TAMIL/code-points');
require('unicode-3.1.0/scripts/TAMIL/symbols');
require('unicode-3.1.0/scripts/TAMIL/regex');

require('unicode-3.1.0/scripts/TELUGU/code-points');
require('unicode-3.1.0/scripts/TELUGU/symbols');
require('unicode-3.1.0/scripts/TELUGU/regex');

require('unicode-3.1.0/scripts/THAANA/code-points');
require('unicode-3.1.0/scripts/THAANA/symbols');
require('unicode-3.1.0/scripts/THAANA/regex');

require('unicode-3.1.0/scripts/THAI/code-points');
require('unicode-3.1.0/scripts/THAI/symbols');
require('unicode-3.1.0/scripts/THAI/regex');

require('unicode-3.1.0/scripts/TIBETAN/code-points');
require('unicode-3.1.0/scripts/TIBETAN/symbols');
require('unicode-3.1.0/scripts/TIBETAN/regex');

require('unicode-3.1.0/scripts/YI/code-points');
require('unicode-3.1.0/scripts/YI/symbols');
require('unicode-3.1.0/scripts/YI/regex');

// case folding:

require('unicode-3.1.0/case-folding/C/code-points'); // lookup map from code point to code point
require('unicode-3.1.0/case-folding/C/code-points').get(codePoint);
require('unicode-3.1.0/case-folding/C/symbols'); // lookup map from symbol to symbol
require('unicode-3.1.0/case-folding/C/symbols').get(symbol);

require('unicode-3.1.0/case-folding/F/code-points'); // lookup map from code point to code point
require('unicode-3.1.0/case-folding/F/code-points').get(codePoint);
require('unicode-3.1.0/case-folding/F/symbols'); // lookup map from symbol to symbol
require('unicode-3.1.0/case-folding/F/symbols').get(symbol);

require('unicode-3.1.0/case-folding/I/code-points'); // lookup map from code point to code point
require('unicode-3.1.0/case-folding/I/code-points').get(codePoint);
require('unicode-3.1.0/case-folding/I/symbols'); // lookup map from symbol to symbol
require('unicode-3.1.0/case-folding/I/symbols').get(symbol);

require('unicode-3.1.0/case-folding/S/code-points'); // lookup map from code point to code point
require('unicode-3.1.0/case-folding/S/code-points').get(codePoint);
require('unicode-3.1.0/case-folding/S/symbols'); // lookup map from symbol to symbol
require('unicode-3.1.0/case-folding/S/symbols').get(symbol);

// blocks:

require('unicode-3.1.0/blocks/Alphabetic_Presentation_Forms/code-points');
require('unicode-3.1.0/blocks/Alphabetic_Presentation_Forms/symbols');
require('unicode-3.1.0/blocks/Alphabetic_Presentation_Forms/regex');

require('unicode-3.1.0/blocks/Arabic/code-points');
require('unicode-3.1.0/blocks/Arabic/symbols');
require('unicode-3.1.0/blocks/Arabic/regex');

require('unicode-3.1.0/blocks/Arabic_Presentation_Forms-A/code-points');
require('unicode-3.1.0/blocks/Arabic_Presentation_Forms-A/symbols');
require('unicode-3.1.0/blocks/Arabic_Presentation_Forms-A/regex');

require('unicode-3.1.0/blocks/Arabic_Presentation_Forms-B/code-points');
require('unicode-3.1.0/blocks/Arabic_Presentation_Forms-B/symbols');
require('unicode-3.1.0/blocks/Arabic_Presentation_Forms-B/regex');

require('unicode-3.1.0/blocks/Armenian/code-points');
require('unicode-3.1.0/blocks/Armenian/symbols');
require('unicode-3.1.0/blocks/Armenian/regex');

require('unicode-3.1.0/blocks/Arrows/code-points');
require('unicode-3.1.0/blocks/Arrows/symbols');
require('unicode-3.1.0/blocks/Arrows/regex');

require('unicode-3.1.0/blocks/Basic_Latin/code-points');
require('unicode-3.1.0/blocks/Basic_Latin/symbols');
require('unicode-3.1.0/blocks/Basic_Latin/regex');

require('unicode-3.1.0/blocks/Bengali/code-points');
require('unicode-3.1.0/blocks/Bengali/symbols');
require('unicode-3.1.0/blocks/Bengali/regex');

require('unicode-3.1.0/blocks/Block_Elements/code-points');
require('unicode-3.1.0/blocks/Block_Elements/symbols');
require('unicode-3.1.0/blocks/Block_Elements/regex');

require('unicode-3.1.0/blocks/Bopomofo/code-points');
require('unicode-3.1.0/blocks/Bopomofo/symbols');
require('unicode-3.1.0/blocks/Bopomofo/regex');

require('unicode-3.1.0/blocks/Bopomofo_Extended/code-points');
require('unicode-3.1.0/blocks/Bopomofo_Extended/symbols');
require('unicode-3.1.0/blocks/Bopomofo_Extended/regex');

require('unicode-3.1.0/blocks/Box_Drawing/code-points');
require('unicode-3.1.0/blocks/Box_Drawing/symbols');
require('unicode-3.1.0/blocks/Box_Drawing/regex');

require('unicode-3.1.0/blocks/Braille_Patterns/code-points');
require('unicode-3.1.0/blocks/Braille_Patterns/symbols');
require('unicode-3.1.0/blocks/Braille_Patterns/regex');

require('unicode-3.1.0/blocks/Byzantine_Musical_Symbols/code-points');
require('unicode-3.1.0/blocks/Byzantine_Musical_Symbols/symbols');
require('unicode-3.1.0/blocks/Byzantine_Musical_Symbols/regex');

require('unicode-3.1.0/blocks/CJK_Compatibility/code-points');
require('unicode-3.1.0/blocks/CJK_Compatibility/symbols');
require('unicode-3.1.0/blocks/CJK_Compatibility/regex');

require('unicode-3.1.0/blocks/CJK_Compatibility_Forms/code-points');
require('unicode-3.1.0/blocks/CJK_Compatibility_Forms/symbols');
require('unicode-3.1.0/blocks/CJK_Compatibility_Forms/regex');

require('unicode-3.1.0/blocks/CJK_Compatibility_Ideographs/code-points');
require('unicode-3.1.0/blocks/CJK_Compatibility_Ideographs/symbols');
require('unicode-3.1.0/blocks/CJK_Compatibility_Ideographs/regex');

require('unicode-3.1.0/blocks/CJK_Compatibility_Ideographs_Supplement/code-points');
require('unicode-3.1.0/blocks/CJK_Compatibility_Ideographs_Supplement/symbols');
require('unicode-3.1.0/blocks/CJK_Compatibility_Ideographs_Supplement/regex');

require('unicode-3.1.0/blocks/CJK_Radicals_Supplement/code-points');
require('unicode-3.1.0/blocks/CJK_Radicals_Supplement/symbols');
require('unicode-3.1.0/blocks/CJK_Radicals_Supplement/regex');

require('unicode-3.1.0/blocks/CJK_Symbols_and_Punctuation/code-points');
require('unicode-3.1.0/blocks/CJK_Symbols_and_Punctuation/symbols');
require('unicode-3.1.0/blocks/CJK_Symbols_and_Punctuation/regex');

require('unicode-3.1.0/blocks/CJK_Unified_Ideographs/code-points');
require('unicode-3.1.0/blocks/CJK_Unified_Ideographs/symbols');
require('unicode-3.1.0/blocks/CJK_Unified_Ideographs/regex');

require('unicode-3.1.0/blocks/CJK_Unified_Ideographs_Extension_A/code-points');
require('unicode-3.1.0/blocks/CJK_Unified_Ideographs_Extension_A/symbols');
require('unicode-3.1.0/blocks/CJK_Unified_Ideographs_Extension_A/regex');

require('unicode-3.1.0/blocks/CJK_Unified_Ideographs_Extension_B/code-points');
require('unicode-3.1.0/blocks/CJK_Unified_Ideographs_Extension_B/symbols');
require('unicode-3.1.0/blocks/CJK_Unified_Ideographs_Extension_B/regex');

require('unicode-3.1.0/blocks/Cherokee/code-points');
require('unicode-3.1.0/blocks/Cherokee/symbols');
require('unicode-3.1.0/blocks/Cherokee/regex');

require('unicode-3.1.0/blocks/Combining_Diacritical_Marks/code-points');
require('unicode-3.1.0/blocks/Combining_Diacritical_Marks/symbols');
require('unicode-3.1.0/blocks/Combining_Diacritical_Marks/regex');

require('unicode-3.1.0/blocks/Combining_Half_Marks/code-points');
require('unicode-3.1.0/blocks/Combining_Half_Marks/symbols');
require('unicode-3.1.0/blocks/Combining_Half_Marks/regex');

require('unicode-3.1.0/blocks/Combining_Marks_for_Symbols/code-points');
require('unicode-3.1.0/blocks/Combining_Marks_for_Symbols/symbols');
require('unicode-3.1.0/blocks/Combining_Marks_for_Symbols/regex');

require('unicode-3.1.0/blocks/Control_Pictures/code-points');
require('unicode-3.1.0/blocks/Control_Pictures/symbols');
require('unicode-3.1.0/blocks/Control_Pictures/regex');

require('unicode-3.1.0/blocks/Currency_Symbols/code-points');
require('unicode-3.1.0/blocks/Currency_Symbols/symbols');
require('unicode-3.1.0/blocks/Currency_Symbols/regex');

require('unicode-3.1.0/blocks/Cyrillic/code-points');
require('unicode-3.1.0/blocks/Cyrillic/symbols');
require('unicode-3.1.0/blocks/Cyrillic/regex');

require('unicode-3.1.0/blocks/Deseret/code-points');
require('unicode-3.1.0/blocks/Deseret/symbols');
require('unicode-3.1.0/blocks/Deseret/regex');

require('unicode-3.1.0/blocks/Devanagari/code-points');
require('unicode-3.1.0/blocks/Devanagari/symbols');
require('unicode-3.1.0/blocks/Devanagari/regex');

require('unicode-3.1.0/blocks/Dingbats/code-points');
require('unicode-3.1.0/blocks/Dingbats/symbols');
require('unicode-3.1.0/blocks/Dingbats/regex');

require('unicode-3.1.0/blocks/Enclosed_Alphanumerics/code-points');
require('unicode-3.1.0/blocks/Enclosed_Alphanumerics/symbols');
require('unicode-3.1.0/blocks/Enclosed_Alphanumerics/regex');

require('unicode-3.1.0/blocks/Enclosed_CJK_Letters_and_Months/code-points');
require('unicode-3.1.0/blocks/Enclosed_CJK_Letters_and_Months/symbols');
require('unicode-3.1.0/blocks/Enclosed_CJK_Letters_and_Months/regex');

require('unicode-3.1.0/blocks/Ethiopic/code-points');
require('unicode-3.1.0/blocks/Ethiopic/symbols');
require('unicode-3.1.0/blocks/Ethiopic/regex');

require('unicode-3.1.0/blocks/General_Punctuation/code-points');
require('unicode-3.1.0/blocks/General_Punctuation/symbols');
require('unicode-3.1.0/blocks/General_Punctuation/regex');

require('unicode-3.1.0/blocks/Geometric_Shapes/code-points');
require('unicode-3.1.0/blocks/Geometric_Shapes/symbols');
require('unicode-3.1.0/blocks/Geometric_Shapes/regex');

require('unicode-3.1.0/blocks/Georgian/code-points');
require('unicode-3.1.0/blocks/Georgian/symbols');
require('unicode-3.1.0/blocks/Georgian/regex');

require('unicode-3.1.0/blocks/Gothic/code-points');
require('unicode-3.1.0/blocks/Gothic/symbols');
require('unicode-3.1.0/blocks/Gothic/regex');

require('unicode-3.1.0/blocks/Greek/code-points');
require('unicode-3.1.0/blocks/Greek/symbols');
require('unicode-3.1.0/blocks/Greek/regex');

require('unicode-3.1.0/blocks/Greek_Extended/code-points');
require('unicode-3.1.0/blocks/Greek_Extended/symbols');
require('unicode-3.1.0/blocks/Greek_Extended/regex');

require('unicode-3.1.0/blocks/Gujarati/code-points');
require('unicode-3.1.0/blocks/Gujarati/symbols');
require('unicode-3.1.0/blocks/Gujarati/regex');

require('unicode-3.1.0/blocks/Gurmukhi/code-points');
require('unicode-3.1.0/blocks/Gurmukhi/symbols');
require('unicode-3.1.0/blocks/Gurmukhi/regex');

require('unicode-3.1.0/blocks/Halfwidth_and_Fullwidth_Forms/code-points');
require('unicode-3.1.0/blocks/Halfwidth_and_Fullwidth_Forms/symbols');
require('unicode-3.1.0/blocks/Halfwidth_and_Fullwidth_Forms/regex');

require('unicode-3.1.0/blocks/Hangul_Compatibility_Jamo/code-points');
require('unicode-3.1.0/blocks/Hangul_Compatibility_Jamo/symbols');
require('unicode-3.1.0/blocks/Hangul_Compatibility_Jamo/regex');

require('unicode-3.1.0/blocks/Hangul_Jamo/code-points');
require('unicode-3.1.0/blocks/Hangul_Jamo/symbols');
require('unicode-3.1.0/blocks/Hangul_Jamo/regex');

require('unicode-3.1.0/blocks/Hangul_Syllables/code-points');
require('unicode-3.1.0/blocks/Hangul_Syllables/symbols');
require('unicode-3.1.0/blocks/Hangul_Syllables/regex');

require('unicode-3.1.0/blocks/Hebrew/code-points');
require('unicode-3.1.0/blocks/Hebrew/symbols');
require('unicode-3.1.0/blocks/Hebrew/regex');

require('unicode-3.1.0/blocks/High_Private_Use_Surrogates/code-points');
require('unicode-3.1.0/blocks/High_Private_Use_Surrogates/symbols');
require('unicode-3.1.0/blocks/High_Private_Use_Surrogates/regex');

require('unicode-3.1.0/blocks/High_Surrogates/code-points');
require('unicode-3.1.0/blocks/High_Surrogates/symbols');
require('unicode-3.1.0/blocks/High_Surrogates/regex');

require('unicode-3.1.0/blocks/Hiragana/code-points');
require('unicode-3.1.0/blocks/Hiragana/symbols');
require('unicode-3.1.0/blocks/Hiragana/regex');

require('unicode-3.1.0/blocks/IPA_Extensions/code-points');
require('unicode-3.1.0/blocks/IPA_Extensions/symbols');
require('unicode-3.1.0/blocks/IPA_Extensions/regex');

require('unicode-3.1.0/blocks/Ideographic_Description_Characters/code-points');
require('unicode-3.1.0/blocks/Ideographic_Description_Characters/symbols');
require('unicode-3.1.0/blocks/Ideographic_Description_Characters/regex');

require('unicode-3.1.0/blocks/Kanbun/code-points');
require('unicode-3.1.0/blocks/Kanbun/symbols');
require('unicode-3.1.0/blocks/Kanbun/regex');

require('unicode-3.1.0/blocks/Kangxi_Radicals/code-points');
require('unicode-3.1.0/blocks/Kangxi_Radicals/symbols');
require('unicode-3.1.0/blocks/Kangxi_Radicals/regex');

require('unicode-3.1.0/blocks/Kannada/code-points');
require('unicode-3.1.0/blocks/Kannada/symbols');
require('unicode-3.1.0/blocks/Kannada/regex');

require('unicode-3.1.0/blocks/Katakana/code-points');
require('unicode-3.1.0/blocks/Katakana/symbols');
require('unicode-3.1.0/blocks/Katakana/regex');

require('unicode-3.1.0/blocks/Khmer/code-points');
require('unicode-3.1.0/blocks/Khmer/symbols');
require('unicode-3.1.0/blocks/Khmer/regex');

require('unicode-3.1.0/blocks/Lao/code-points');
require('unicode-3.1.0/blocks/Lao/symbols');
require('unicode-3.1.0/blocks/Lao/regex');

require('unicode-3.1.0/blocks/Latin-1_Supplement/code-points');
require('unicode-3.1.0/blocks/Latin-1_Supplement/symbols');
require('unicode-3.1.0/blocks/Latin-1_Supplement/regex');

require('unicode-3.1.0/blocks/Latin_Extended-A/code-points');
require('unicode-3.1.0/blocks/Latin_Extended-A/symbols');
require('unicode-3.1.0/blocks/Latin_Extended-A/regex');

require('unicode-3.1.0/blocks/Latin_Extended-B/code-points');
require('unicode-3.1.0/blocks/Latin_Extended-B/symbols');
require('unicode-3.1.0/blocks/Latin_Extended-B/regex');

require('unicode-3.1.0/blocks/Latin_Extended_Additional/code-points');
require('unicode-3.1.0/blocks/Latin_Extended_Additional/symbols');
require('unicode-3.1.0/blocks/Latin_Extended_Additional/regex');

require('unicode-3.1.0/blocks/Letterlike_Symbols/code-points');
require('unicode-3.1.0/blocks/Letterlike_Symbols/symbols');
require('unicode-3.1.0/blocks/Letterlike_Symbols/regex');

require('unicode-3.1.0/blocks/Low_Surrogates/code-points');
require('unicode-3.1.0/blocks/Low_Surrogates/symbols');
require('unicode-3.1.0/blocks/Low_Surrogates/regex');

require('unicode-3.1.0/blocks/Malayalam/code-points');
require('unicode-3.1.0/blocks/Malayalam/symbols');
require('unicode-3.1.0/blocks/Malayalam/regex');

require('unicode-3.1.0/blocks/Mathematical_Alphanumeric_Symbols/code-points');
require('unicode-3.1.0/blocks/Mathematical_Alphanumeric_Symbols/symbols');
require('unicode-3.1.0/blocks/Mathematical_Alphanumeric_Symbols/regex');

require('unicode-3.1.0/blocks/Mathematical_Operators/code-points');
require('unicode-3.1.0/blocks/Mathematical_Operators/symbols');
require('unicode-3.1.0/blocks/Mathematical_Operators/regex');

require('unicode-3.1.0/blocks/Miscellaneous_Symbols/code-points');
require('unicode-3.1.0/blocks/Miscellaneous_Symbols/symbols');
require('unicode-3.1.0/blocks/Miscellaneous_Symbols/regex');

require('unicode-3.1.0/blocks/Miscellaneous_Technical/code-points');
require('unicode-3.1.0/blocks/Miscellaneous_Technical/symbols');
require('unicode-3.1.0/blocks/Miscellaneous_Technical/regex');

require('unicode-3.1.0/blocks/Mongolian/code-points');
require('unicode-3.1.0/blocks/Mongolian/symbols');
require('unicode-3.1.0/blocks/Mongolian/regex');

require('unicode-3.1.0/blocks/Musical_Symbols/code-points');
require('unicode-3.1.0/blocks/Musical_Symbols/symbols');
require('unicode-3.1.0/blocks/Musical_Symbols/regex');

require('unicode-3.1.0/blocks/Myanmar/code-points');
require('unicode-3.1.0/blocks/Myanmar/symbols');
require('unicode-3.1.0/blocks/Myanmar/regex');

require('unicode-3.1.0/blocks/Number_Forms/code-points');
require('unicode-3.1.0/blocks/Number_Forms/symbols');
require('unicode-3.1.0/blocks/Number_Forms/regex');

require('unicode-3.1.0/blocks/Ogham/code-points');
require('unicode-3.1.0/blocks/Ogham/symbols');
require('unicode-3.1.0/blocks/Ogham/regex');

require('unicode-3.1.0/blocks/Old_Italic/code-points');
require('unicode-3.1.0/blocks/Old_Italic/symbols');
require('unicode-3.1.0/blocks/Old_Italic/regex');

require('unicode-3.1.0/blocks/Optical_Character_Recognition/code-points');
require('unicode-3.1.0/blocks/Optical_Character_Recognition/symbols');
require('unicode-3.1.0/blocks/Optical_Character_Recognition/regex');

require('unicode-3.1.0/blocks/Oriya/code-points');
require('unicode-3.1.0/blocks/Oriya/symbols');
require('unicode-3.1.0/blocks/Oriya/regex');

require('unicode-3.1.0/blocks/Private_Use/code-points');
require('unicode-3.1.0/blocks/Private_Use/symbols');
require('unicode-3.1.0/blocks/Private_Use/regex');

require('unicode-3.1.0/blocks/Runic/code-points');
require('unicode-3.1.0/blocks/Runic/symbols');
require('unicode-3.1.0/blocks/Runic/regex');

require('unicode-3.1.0/blocks/Sinhala/code-points');
require('unicode-3.1.0/blocks/Sinhala/symbols');
require('unicode-3.1.0/blocks/Sinhala/regex');

require('unicode-3.1.0/blocks/Small_Form_Variants/code-points');
require('unicode-3.1.0/blocks/Small_Form_Variants/symbols');
require('unicode-3.1.0/blocks/Small_Form_Variants/regex');

require('unicode-3.1.0/blocks/Spacing_Modifier_Letters/code-points');
require('unicode-3.1.0/blocks/Spacing_Modifier_Letters/symbols');
require('unicode-3.1.0/blocks/Spacing_Modifier_Letters/regex');

require('unicode-3.1.0/blocks/Specials/code-points');
require('unicode-3.1.0/blocks/Specials/symbols');
require('unicode-3.1.0/blocks/Specials/regex');

require('unicode-3.1.0/blocks/Superscripts_and_Subscripts/code-points');
require('unicode-3.1.0/blocks/Superscripts_and_Subscripts/symbols');
require('unicode-3.1.0/blocks/Superscripts_and_Subscripts/regex');

require('unicode-3.1.0/blocks/Syriac/code-points');
require('unicode-3.1.0/blocks/Syriac/symbols');
require('unicode-3.1.0/blocks/Syriac/regex');

require('unicode-3.1.0/blocks/Tags/code-points');
require('unicode-3.1.0/blocks/Tags/symbols');
require('unicode-3.1.0/blocks/Tags/regex');

require('unicode-3.1.0/blocks/Tamil/code-points');
require('unicode-3.1.0/blocks/Tamil/symbols');
require('unicode-3.1.0/blocks/Tamil/regex');

require('unicode-3.1.0/blocks/Telugu/code-points');
require('unicode-3.1.0/blocks/Telugu/symbols');
require('unicode-3.1.0/blocks/Telugu/regex');

require('unicode-3.1.0/blocks/Thaana/code-points');
require('unicode-3.1.0/blocks/Thaana/symbols');
require('unicode-3.1.0/blocks/Thaana/regex');

require('unicode-3.1.0/blocks/Thai/code-points');
require('unicode-3.1.0/blocks/Thai/symbols');
require('unicode-3.1.0/blocks/Thai/regex');

require('unicode-3.1.0/blocks/Tibetan/code-points');
require('unicode-3.1.0/blocks/Tibetan/symbols');
require('unicode-3.1.0/blocks/Tibetan/regex');

require('unicode-3.1.0/blocks/Unified_Canadian_Aboriginal_Syllabics/code-points');
require('unicode-3.1.0/blocks/Unified_Canadian_Aboriginal_Syllabics/symbols');
require('unicode-3.1.0/blocks/Unified_Canadian_Aboriginal_Syllabics/regex');

require('unicode-3.1.0/blocks/Yi_Radicals/code-points');
require('unicode-3.1.0/blocks/Yi_Radicals/symbols');
require('unicode-3.1.0/blocks/Yi_Radicals/regex');

require('unicode-3.1.0/blocks/Yi_Syllables/code-points');
require('unicode-3.1.0/blocks/Yi_Syllables/symbols');
require('unicode-3.1.0/blocks/Yi_Syllables/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
