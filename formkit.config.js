import { generateClasses } from '@formkit/themes'
import theme from './FormKitTheme';

export default {
    config: {
        classes: generateClasses(theme)
    }
}