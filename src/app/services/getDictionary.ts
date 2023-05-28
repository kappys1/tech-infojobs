import { Dictionary } from '../model/dictionary'
import city from './json/city.json' assert { type: 'json' }
import country from './json/country.json' assert { type: 'json' }
import province from './json/province.json' assert { type: 'json' }

type DictionaryType = 'city' | 'country' | 'province'
export function getDictionary (type: DictionaryType) {
  const DICTIONARY: Record<DictionaryType, Dictionary[]> = {
    city,
    country,
    province
  }
  return DICTIONARY[type]
}
