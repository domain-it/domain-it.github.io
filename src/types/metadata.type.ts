export interface MarkdownMetaData {
  slug: string;
  tags: string[];
  author: string;
  date: string;
  title: string;
  description: string;
  robots: boolean;
  charset: // ASCII
  | 'US-ASCII'

    // Unicode
    | 'UTF-8'
    | 'UTF-16'
    | 'UTF-16BE'
    | 'UTF-16LE'
    | 'UTF-32'
    | 'UTF-32BE'
    | 'UTF-32LE'

    // Western European
    | 'ISO-8859-1' // Latin-1
    | 'ISO-8859-2' // Latin-2 (Central European)
    | 'ISO-8859-3' // Latin-3 (South European)
    | 'ISO-8859-4' // Latin-4 (North European)
    | 'ISO-8859-5' // Cyrillic
    | 'ISO-8859-6' // Arabic
    | 'ISO-8859-7' // Greek
    | 'ISO-8859-8' // Hebrew
    | 'ISO-8859-9' // Latin-5 (Turkish)
    | 'ISO-8859-10' // Latin-6 (Nordic)
    | 'ISO-8859-13' // Latin-7 (Baltic Rim)
    | 'ISO-8859-14' // Latin-8 (Celtic)
    | 'ISO-8859-15' // Latin-9 (Western European updated)
    | 'ISO-8859-16' // Latin-10 (South-Eastern European)

    // Windows code pages
    | 'Windows-1250' // Central European
    | 'Windows-1251' // Cyrillic
    | 'Windows-1252' // Western European (Latin)
    | 'Windows-1253' // Greek
    | 'Windows-1254' // Turkish
    | 'Windows-1255' // Hebrew
    | 'Windows-1256' // Arabic
    | 'Windows-1257' // Baltic
    | 'Windows-1258' // Vietnamese

    // KOI encodings (Cyrillic)
    | 'KOI8-R'
    | 'KOI8-U'

    // Macintosh encodings
    | 'MacRoman'
    | 'MacCentralEurope'
    | 'MacCyrillic'
    | 'MacGreek'
    | 'MacTurkish'
    | 'MacHebrew'
    | 'MacArabic'

    // East Asian encodings
    | 'Shift_JIS' // Japanese
    | 'EUC-JP' // Japanese
    | 'ISO-2022-JP' // Japanese
    | 'GB2312' // Simplified Chinese
    | 'GBK' // Simplified Chinese extended
    | 'GB18030' // Simplified Chinese extended
    | 'Big5' // Traditional Chinese
    | 'EUC-KR' // Korean
    | 'ISO-2022-KR' // Korean

    // Others
    | 'TIS-620' // Thai
    | 'VISCII' // Vietnamese
    | 'HZ-GB-2312'; // Simplified Chinese
  thumbnail: string;
  url: string;
}
