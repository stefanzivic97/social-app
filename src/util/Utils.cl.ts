import { readdirSync } from 'fs';
import { extname } from 'path';

export namespace UtilsLib {

    export class Importer {

        public pathsWithKeys: { [key: string]: string}[] = [];

        constructor() {
            this.init('../importer/test_files');
        }

        public init(path: any) {
            const readFiles = readdirSync(path);
            this.map(readFiles)
        }

        private map(files: any) {
            const list_of_files_with_extensions: { [key: string]: string }[] = [];
            const list_of_characters: { [key: string]: string }[] = [];
            const _el = [];
            const _el2 = [];
            
            for (let i = 0; i < files.length; i++) {
                const file_with_extension = files[i];
                // console.log('first for loop: ', file_with_extension);   
                list_of_files_with_extensions.push(file_with_extension);
                
                const a = file_with_extension.indexOf('.js') 
                console.log(a);

                console.log(file_with_extension[5]);
                
                

                // for (let y = 0; y < file_with_extension.length; y++) {
                //     const character = file_with_extension[y];
                //     console.log(character)

                //     list_of_characters.push(character);
                // }
            }
            
            console.log('=> list_of_files_with_extensions[]\n-Array-\n', list_of_files_with_extensions, '\n-Array-')
            // console.log('=> list_of_characters[]\n-Array-', list_of_characters, '\n-Array')
        }



    }

}