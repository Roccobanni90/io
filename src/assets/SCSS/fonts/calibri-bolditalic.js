import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('calibri-bolditalic.ttf', font);
this.addFont('calibri-bolditalic.ttf', 'calibri', 'bolditalic');
};
jsPDF.API.events.push(['addFonts', callAddFont])