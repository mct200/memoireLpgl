package sn.groupeisi.dp.service;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

@Service
public class PDFGeneredService {
    public void export(HttpServletResponse response ) throws DocumentException, IOException{

        Document document= new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();
        Font fontTitle =FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);
        Paragraph paragraph= new Paragraph("This is a title",fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);
        Font fontParagraph =FontFactory.getFont(FontFactory.HELVETICA);
        fontParagraph.setSize(12);

        Paragraph paragraph2= new Paragraph("This is a paragraph.",fontParagraph);
        paragraph2.setAlignment(Paragraph.ALIGN_LEFT);  
        document.add(paragraph);
        document.add(paragraph2);
        document.close();
    }
}


