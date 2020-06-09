import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yaziIciAdsens'
})
export class YaziIciAdsensPipe implements PipeTransform {


    transform(input: any, args?: any): any {
        try {
            if (input == null) return;

            var paragraf = input.split("</p>");
            var ortaP = paragraf.length / 2;
            input = "";
            for (let index = 0; index <= paragraf.length; index++) {
                if (paragraf[index]) {
                    input += paragraf[index];
                } else {
                    ortaP = ortaP - 1;
                }
                if (index == ortaP - 2) {
                    input += `<p><ins class="adsbygoogle"
                                                        style="display:block; text-align:center;"
                                                        data-ad-layout="in-article"
                                                        data-ad-format="fluid"
                                                        data-ad-client="ca-pub-7545098926180612"
                                                        data-ad-slot="2385944985"></ins></p>`;
                }
            }
            return input;
        } catch (error) {
            console.error('Here is the error message', error);
        }
    }

} 