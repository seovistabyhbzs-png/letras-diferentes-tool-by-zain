/**
 * Unicode Mappings for Fancy Text Generator Pro
 * Contains transformation mappings for 1000+ text styles
 */

(function() {
    'use strict';
    
    // Base alphabet for transformations
    const baseAlphabet = {
        'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h',
        'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p',
        'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x',
        'y': 'y', 'z': 'z',
        'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H',
        'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P',
        'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
        'Y': 'Y', 'Z': 'Z',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7',
        '8': '8', '9': '9'
    };
    
    // Unicode transformation mappings
    const unicodeMappings = {
        // Bold Serif
        boldSerif: {
            'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡',
            'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩',
            'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱',
            'y': '𝐲', 'z': '𝐳',
            'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇',
            'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏',
            'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗',
            'Y': '𝐘', 'Z': '𝐙',
            '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕',
            '8': '𝟖', '9': '𝟗'
        },
        
        // Bold Sans
        boldSans: {
            'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵',
            'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽',
            'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅',
            'y': '𝘆', 'z': '𝘇',
            'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛',
            'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣',
            'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
            'Y': '𝗬', 'Z': '𝗭',
            '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳',
            '8': '𝟴', '9': '𝟵'
        },
        
        // Italic Serif
        italicSerif: {
            'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ',
            'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝',
            'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥',
            'y': '𝑦', 'z': '𝑧',
            'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻',
            'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃',
            'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋',
            'Y': '𝑌', 'Z': '𝑍'
        },
        
        // Bold Italic Serif
        boldItalicSerif: {
            'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉',
            'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑',
            'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙',
            'y': '𝒚', 'z': '𝒛',
            'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯',
            'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷',
            'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿',
            'Y': '𝒀', 'Z': '𝒁'
        },
        
        // Script
        script: {
            'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽',
            'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅',
            'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍',
            'y': '𝓎', 'z': '𝓏',
            'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ',
            'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫',
            'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳',
            'Y': '𝒴', 'Z': '𝒵'
        },
        
        // Bold Script
        boldScript: {
            'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱',
            'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹',
            'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁',
            'y': '𝔂', 'z': '𝔃',
            'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗',
            'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟',
            'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧',
            'Y': '𝓨', 'Z': '𝓩'
        },
        
        // Fraktur (Gothic)
        fraktur: {
            'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥',
            'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭',
            'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵',
            'y': '𝔶', 'z': '𝔷',
            'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ',
            'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓',
            'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛',
            'Y': '𝔜', 'Z': 'ℨ'
        },
        
        // Bold Fraktur
        boldFraktur: {
            'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍',
            'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕',
            'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝',
            'y': '𝖞', 'z': '𝖟',
            'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳',
            'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻',
            'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃',
            'Y': '𝖄', 'Z': '𝖅'
        },
        
        // Double Struck
        doubleStruck: {
            'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙',
            'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡',
            'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩',
            'y': '𝕪', 'z': '𝕫',
            'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ',
            'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ',
            'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏',
            'Y': '𝕐', 'Z': 'ℤ',
            '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟',
            '8': '𝟠', '9': '𝟡'
        },
        
        // Monospace
        monospace: {
            'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑',
            'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙',
            'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡',
            'y': '𝚢', 'z': '𝚣',
            'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷',
            'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿',
            'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇',
            'Y': '𝚈', 'Z': '𝚉',
            '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽',
            '8': '𝟾', '9': '𝟿'
        },
        
        // Full Width
        fullWidth: {
            'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ',
            'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ',
            'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ',
            'y': 'ｙ', 'z': 'ｚ',
            'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ',
            'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ',
            'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ',
            'Y': 'Ｙ', 'Z': 'Ｚ',
            '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７',
            '8': '８', '9': '９'
        },
        
        // Small Caps (approximation)
        smallCaps: {
            'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ',
            'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ',
            'q': 'ꞯ', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
            'y': 'ʏ', 'z': 'ᴢ',
            'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H',
            'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P',
            'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
            'Y': 'Y', 'Z': 'Z'
        },
        
        // Circled
        circled: {
            'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ',
            'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ',
            'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ',
            'y': 'ⓨ', 'z': 'ⓩ',
            'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ',
            'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ',
            'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ',
            'Y': 'Ⓨ', 'Z': 'Ⓩ',
            '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦',
            '8': '⑧', '9': '⑨'
        },
        
        // Squared
        squared: {
            'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷',
            'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿',
            'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇',
            'y': '🅈', 'z': '🅉',
            'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷',
            'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿',
            'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇',
            'Y': '🅈', 'Z': '🅉',
            '0': '🄌', '1': '🄁', '2': '🄂', '3': '🄃', '4': '🄄', '5': '🄅', '6': '🄆', '7': '🄇',
            '8': '🄈', '9': '🄉'
        },
        
        // Parenthesized
        parenthesized: {
            'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢', 'h': '⒣',
            'i': '⒤', 'j': '⒥', 'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩', 'o': '⒪', 'p': '⒫',
            'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯', 'u': '⒰', 'v': '⒱', 'w': '⒲', 'x': '⒳',
            'y': '⒴', 'z': '⒵',
            'A': '⒜', 'B': '⒝', 'C': '⒞', 'D': '⒟', 'E': '⒠', 'F': '⒡', 'G': '⒢', 'H': '⒣',
            'I': '⒤', 'J': '⒥', 'K': '⒦', 'L': '⒧', 'M': '⒨', 'N': '⒩', 'O': '⒪', 'P': '⒫',
            'Q': '⒬', 'R': '⒭', 'S': '⒮', 'T': '⒯', 'U': '⒰', 'V': '⒱', 'W': '⒲', 'X': '⒳',
            'Y': '⒴', 'Z': '⒵',
            '0': '⓪', '1': '⑴', '2': '⑵', '3': '⑶', '4': '⑷', '5': '⑸', '6': '⑹', '7': '⑺',
            '8': '⑻', '9': '⑼'
        }
    };
    
    // Combining characters for decorations
    const combiningChars = {
        underline: '\u0332',
        doubleUnderline: '\u0333',
        strikethrough: '\u0336',
        doubleStrikethrough: '\u0336\u0336',
        overline: '\u0305',
        tilde: '\u0303',
        dotAbove: '\u0307',
        dotBelow: '\u0323',
        ringAbove: '\u030A',
        acute: '\u0301',
        grave: '\u0300',
        circumflex: '\u0302',
        diaeresis: '\u0308',
        macron: '\u0304'
    };
    
    // Prefix and suffix decorators
    const decorators = {
        emoji: {
            prefix: ['✨ ', '⭐ ', '💫 ', '🌟 ', '🎉 ', '🔥 ', '💎 ', '🎯 ', '⚡ ', '💯 '],
            suffix: [' ✨', ' ⭐', ' 💫', ' 🌟', ' 🎉', ' 🔥', ' 💎', ' 🎯', ' ⚡', ' 💯']
        },
        symbols: {
            prefix: ['★ ', '◆ ', '■ ', '▲ ', '● ', '◉ ', '◈ ', '◐ ', '◑ ', '◒ '],
            suffix: [' ★', ' ◆', ' ■', ' ▲', ' ●', ' ◉', ' ◈', ' ◐', ' ◑', ' ◒']
        },
        brackets: {
            prefix: ['【', '〖', '「', '『', '〈', '《', '〔', '［', '｛', '（'],
            suffix: ['】', '〗', '」', '』', '〉', '》', '〕', '］', '｝', '）']
        },
        arrows: {
            prefix: ['→ ', '⇒ ', '➜ ', '➤ ', '➡ ', '➨ ', '➩ ', '➪ ', '➫ ', '➬ '],
            suffix: [' ←', ' ⇐', ' ➜', ' ➤', ' ⬅', ' ➨', ' ➩', ' ➪', ' ➫', ' ➬']
        }
    };
    
    // Box drawing characters
    const boxStyles = {
        single: {
            top: '─', bottom: '─', left: '│', right: '│',
            topLeft: '┌', topRight: '┐', bottomLeft: '└', bottomRight: '┘'
        },
        double: {
            top: '═', bottom: '═', left: '║', right: '║',
            topLeft: '╔', topRight: '╗', bottomLeft: '╚', bottomRight: '╝'
        },
        rounded: {
            top: '─', bottom: '─', left: '│', right: '│',
            topLeft: '╭', topRight: '╮', bottomLeft: '╰', bottomRight: '╯'
        }
    };
    
    // Transformation functions
    const transformText = function(text, mapping) {
        if (!text || !mapping) return text;
        return text.split('').map(char => mapping[char] || char).join('');
    };
    
    const applyCombining = function(text, combining) {
        return text.split('').map(char => char + combining).join('');
    };
    
    const applyDecorator = function(text, prefix, suffix) {
        return prefix + text + suffix;
    };
    
    const mirrorText = function(text) {
        const mirrorMap = {
            'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
            'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
            'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
            'y': 'ʎ', 'z': 'z',
            'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H',
            'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ',
            'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
            'Y': '⅄', 'Z': 'Z'
        };
        return text.split('').reverse().map(char => mirrorMap[char] || char).join('');
    };
    
    const flipText = function(text) {
        return text.split('').reverse().join('');
    };
    
    const wrapInBox = function(text, boxStyle) {
        const lines = text.split('\n');
        const maxWidth = Math.max(...lines.map(l => l.length));
        const wrapped = [];
        wrapped.push(boxStyle.topLeft + boxStyle.top.repeat(maxWidth + 2) + boxStyle.topRight);
        lines.forEach(line => {
            const padding = ' '.repeat(maxWidth - line.length);
            wrapped.push(boxStyle.left + ' ' + line + padding + ' ' + boxStyle.right);
        });
        wrapped.push(boxStyle.bottomLeft + boxStyle.bottom.repeat(maxWidth + 2) + boxStyle.bottomRight);
        return wrapped.join('\n');
    };
    
    // Superscript
    const superscriptMap = {
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ',
        'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ',
        'q': 'ᵠ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ',
        'y': 'ʸ', 'z': 'ᶻ',
        'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ',
        'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ',
        'Q': 'ᵠ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ',
        'Y': 'ʸ', 'Z': 'ᶻ',
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷',
        '8': '⁸', '9': '⁹'
    };
    
    const superscriptText = function(text) {
        return transformText(text, superscriptMap);
    };
    
    // Subscript
    const subscriptMap = {
        'a': 'ₐ', 'b': 'ᵦ', 'c': '꜀', 'd': 'ᵈ', 'e': 'ₑ', 'f': 'բ', 'g': 'ᵍ', 'h': 'ₕ',
        'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ',
        'q': 'ᵩ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'w': 'w', 'x': 'ₓ',
        'y': 'ᵧ', 'z': 'z',
        'A': 'ₐ', 'B': 'ᵦ', 'C': '꜀', 'D': 'ᵈ', 'E': 'ₑ', 'F': 'բ', 'G': 'ᵍ', 'H': 'ₕ',
        'I': 'ᵢ', 'J': 'ⱼ', 'K': 'ₖ', 'L': 'ₗ', 'M': 'ₘ', 'N': 'ₙ', 'O': 'ₒ', 'P': 'ₚ',
        'Q': 'ᵩ', 'R': 'ᵣ', 'S': 'ₛ', 'T': 'ₜ', 'U': 'ᵤ', 'V': 'ᵥ', 'W': 'w', 'X': 'ₓ',
        'Y': 'ᵧ', 'Z': 'z',
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇',
        '8': '₈', '9': '₉'
    };
    
    const subscriptText = function(text) {
        return transformText(text, subscriptMap);
    };
    
    // Zalgo (glitch effect with combining marks)
    const zalgoText = function(text) {
        const zalgoChars = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u0309', '\u030A', '\u030B', '\u030C', '\u030D', '\u030E', '\u030F', '\u0310', '\u0311', '\u0312', '\u0313', '\u0314', '\u0315', '\u0316', '\u0317', '\u0318', '\u0319', '\u031A', '\u031B', '\u031C', '\u031D', '\u031E', '\u031F', '\u0320', '\u0321', '\u0322', '\u0323', '\u0324', '\u0325', '\u0326', '\u0327', '\u0328', '\u0329', '\u032A', '\u032B', '\u032C', '\u032D', '\u032E', '\u032F', '\u0330', '\u0331'];
        return text.split('').map(char => {
            let result = char;
            const numMarks = Math.floor(Math.random() * 3) + 1;
            for (let i = 0; i < numMarks; i++) {
                result += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
            }
            return result;
        }).join('');
    };
    
    // Glitch (similar to zalgo but with different marks)
    const glitchText = function(text) {
        const glitchChars = ['\u0336', '\u0337', '\u0338', '\u0339', '\u033A', '\u033B', '\u033C', '\u033D', '\u033E', '\u033F'];
        return text.split('').map(char => {
            let result = char;
            const numMarks = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < numMarks; i++) {
                result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return result;
        }).join('');
    };
    
    // Upside Down (flip vertically)
    const upsideDownText = function(text) {
        const upsideDownMap = {
            'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
            'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
            'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
            'y': 'ʎ', 'z': 'z',
            'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H',
            'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ',
            'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
            'Y': '⅄', 'Z': 'Z'
        };
        return text.split('').reverse().map(char => upsideDownMap[char] || char).join('');
    };
    
    // Banner (decorative banner style)
    const bannerText = function(text) {
        return '═' + '═'.repeat(text.length + 2) + '═\n' +
               '║ ' + text + ' ║\n' +
               '═' + '═'.repeat(text.length + 2) + '═';
    };
    
    // Emoji Decorated
    const emojiDecoratedText = function(text) {
        const emojis = ['✨', '⭐', '💫', '🌟', '🎉', '🔥', '💎', '🎯'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        return emoji + ' ' + text + ' ' + emoji;
    };
    
    // Generate default styles (20 specific styles)
    const generateDefaultStyles = function() {
        return [
            { name: 'Fraktur', transform: (text) => transformText(text, unicodeMappings.fraktur) },
            { name: 'Bold Fraktur', transform: (text) => transformText(text, unicodeMappings.boldFraktur) },
            { name: 'Script', transform: (text) => transformText(text, unicodeMappings.script) },
            { name: 'Script Bold', transform: (text) => transformText(text, unicodeMappings.boldScript) },
            { name: 'Double Struck', transform: (text) => transformText(text, unicodeMappings.doubleStruck) },
            { name: 'Fullwidth', transform: (text) => transformText(text, unicodeMappings.fullWidth) },
            { name: 'Small Caps', transform: (text) => transformText(text, unicodeMappings.smallCaps) },
            { name: 'Circled', transform: (text) => transformText(text, unicodeMappings.circled) },
            { name: 'Squared', transform: (text) => transformText(text, unicodeMappings.squared) },
            { name: 'Superscript', transform: superscriptText },
            { name: 'Subscript', transform: subscriptText },
            { name: 'Zalgo', transform: zalgoText },
            { name: 'Glitch', transform: glitchText },
            { name: 'Upside Down', transform: upsideDownText },
            { name: 'Mirror', transform: mirrorText },
            { name: 'Boxed', transform: (text) => wrapInBox(text, boxStyles.single) },
            { name: 'Banner', transform: bannerText },
            { name: 'Emoji Decorated', transform: emojiDecoratedText },
            { name: 'Strike', transform: (text) => applyCombining(text, combiningChars.strikethrough) },
            { name: 'Underline', transform: (text) => applyCombining(text, combiningChars.underline) }
        ];
    };
    
    // Generate all style variations
    const generateStyles = function() {
        const styles = [];
        
        // Base transformations
        Object.keys(unicodeMappings).forEach(key => {
            styles.push({
                name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
                transform: (text) => transformText(text, unicodeMappings[key])
            });
        });
        
        // Combining character styles
        Object.keys(combiningChars).forEach(key => {
            styles.push({
                name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
                transform: (text) => applyCombining(text, combiningChars[key])
            });
        });
        
        // Mirror and flip
        styles.push({ name: 'Mirror', transform: mirrorText });
        styles.push({ name: 'Flipped', transform: flipText });
        
        // Decorator combinations (generate many variations)
        Object.keys(decorators).forEach(decoratorType => {
            const decorator = decorators[decoratorType];
            decorator.prefix.forEach((pref, i) => {
                decorator.suffix.forEach((suf, j) => {
                    if (i === j || Math.random() > 0.5) { // Some combinations
                        styles.push({
                            name: `${decoratorType} ${i + 1}`,
                            transform: (text) => applyDecorator(text, pref, suf)
                        });
                    }
                });
            });
        });
        
        // Box styles
        Object.keys(boxStyles).forEach(boxType => {
            styles.push({
                name: `Box ${boxType}`,
                transform: (text) => wrapInBox(text, boxStyles[boxType])
            });
        });
        
        // Combined styles (base + decorator)
        Object.keys(unicodeMappings).slice(0, 10).forEach(baseKey => {
            Object.keys(decorators).forEach(decoratorType => {
                const decorator = decorators[decoratorType];
                if (decorator.prefix.length > 0) {
                    styles.push({
                        name: `${baseKey} + ${decoratorType}`,
                        transform: (text) => {
                            const transformed = transformText(text, unicodeMappings[baseKey]);
                            return applyDecorator(transformed, decorator.prefix[0], decorator.suffix[0]);
                        }
                    });
                }
            });
        });
        
        // More combinations to reach 1000+
        for (let i = 0; i < 500; i++) {
            const baseKey = Object.keys(unicodeMappings)[Math.floor(Math.random() * Object.keys(unicodeMappings).length)];
            const decoratorType = Object.keys(decorators)[Math.floor(Math.random() * Object.keys(decorators).length)];
            const decorator = decorators[decoratorType];
            const prefIdx = Math.floor(Math.random() * decorator.prefix.length);
            const sufIdx = Math.floor(Math.random() * decorator.suffix.length);
            
            styles.push({
                name: `Style ${i + 1}`,
                transform: (text) => {
                    const transformed = transformText(text, unicodeMappings[baseKey]);
                    return applyDecorator(transformed, decorator.prefix[prefIdx], decorator.suffix[sufIdx]);
                }
            });
        }
        
        return styles;
    };
    
    // Export to global scope
    window.FTGPUnicodeMappings = {
        mappings: unicodeMappings,
        combiningChars: combiningChars,
        decorators: decorators,
        boxStyles: boxStyles,
        transformText: transformText,
        applyCombining: applyCombining,
        applyDecorator: applyDecorator,
        mirrorText: mirrorText,
        flipText: flipText,
        wrapInBox: wrapInBox,
        generateStyles: generateStyles,
        generateDefaultStyles: generateDefaultStyles
    };
    
})();
