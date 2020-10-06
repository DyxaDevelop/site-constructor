import image from './assets/image.png'
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './classes/blocks'



export const model = [
    new TitleBlock('Site Constructor', {
        tag: 'h2',
        //styles: `color: red;`
        styles: {
            background: "blue",
            color: '#fff',
            padding: '1rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('We go with text', {
        tag: 'h2',
        //styles: `color: red;`
        styles: {
            background: "blue",
            color: '#fff',
            padding: '1rem',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock([
        '111111111',
        '2222222222',
        '33333333333'
    ], {
        tag: 'h2',
        //styles: `color: red;`
        styles: {
            background: "blue",
            color: '#fff',
            padding: '1rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        tag: 'h2',
        //styles: `color: red;`
        styles: {
            background: "blue",
            color: '#fff',
            padding: '1rem',
            'text-align': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Its a picture'
    }),
]
