// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocaleStorage'

export const useForm = key => {
    const [value,setValue] = useLocalStorage(key)
    return ([value, setValue])
}