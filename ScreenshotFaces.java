import java.awt.AWTException;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.InputStreamReader;
import javax.imageio.ImageIO;
 
public class ScreenshotFaces {
 
    public static void main(String[] args) {
        takeScreenshot();
    }
    public static void takeScreenshot(){
        try {
            Robot robot = new Robot();
 
            Rectangle rectangle = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
            BufferedImage bufferedImage = robot.createScreenCapture(rectangle);
            File file = new File("screen-capture.png");
            boolean status = ImageIO.write(bufferedImage, "png", file);
            System.out.println("Screen Captured ? " + status + " File Path:- " + file.getAbsolutePath());
            Process p = Runtime.getRuntime().exec("python face_detect_img.py");
            
        } catch (AWTException | IOException ex) {
            System.err.println(ex);
        }
    }
}