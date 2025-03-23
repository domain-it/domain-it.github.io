export interface Article {
  attributes: Attributes;
  content: string;
}

export interface Attributes {
  title: string;
  author: string;
  description?: string;
  tags?: string[];
  date?: string;
  robots: boolean;
  charset:
    'US-ASCII' |
    'ISO-8859-1' |
    'ISO-8859-2' |
    'ISO-8859-3' |
    'ISO-8859-4' |
    'ISO-8859-5' |
    'ISO-8859-6' |
    'ISO-8859-7' |
    'ISO-8859-8' |
    'ISO-8859-9' |
    'ISO-8859-10' |
    'ISO-8859-13' |
    'ISO-8859-14' |
    'ISO-8859-15' |
    'ISO-8859-16' |
    'UTF-8' |
    'UTF-16' |
    'UTF-16BE' |
    'UTF-16LE' |
    'UTF-32' |
    'UTF-32BE' |
    'UTF-32LE' |
    'Windows-1250' |
    'Windows-1251' |
    'Windows-1252' |
    'Windows-1253' |
    'Windows-1254' |
    'Windows-1255' |
    'Windows-1256' |
    'Windows-1257' |
    'Windows-1258' |
    'KOI8-R' |
    'KOI8-U' |
    'MacRoman' |
    'MacCentralEurope' |
    'MacCroatian' |
    'MacCyrillic' |
    'MacGreek' |
    'MacIceland' |
    'MacTurkish' |
    'MacRomania';
}
