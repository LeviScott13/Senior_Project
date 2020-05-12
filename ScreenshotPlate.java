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
 
public class ScreenshotPlate {
 
    public static void main(String[] args) {
        takeScreenshot();
    }
    public static void takeScreenshot(){
        try {
            Robot robot = new Robot();
 
            Rectangle rectangle = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
            BufferedImage bufferedImage = robot.createScreenCapture(rectangle);
            BufferedImage bufferedImage2 = robot.createScreenCapture(rectangle); 
            File file = new File("screen-capture.png");
            File file2 = new File("design.png");
            boolean status = ImageIO.write(cropImage(bufferedImage, 490,245,250,445), "png", file);
            boolean status2 = ImageIO.write(bufferedImage2, "png", file2);
            System.out.println("Screen Captured ? " + status + " File Path:- " + file.getAbsolutePath());
            Process p = Runtime.getRuntime().exec("python license_plate.py");
            
        } catch (AWTException | IOException ex) {
            System.err.println(ex);
        }
    }
    public static BufferedImage cropImage(BufferedImage bufferedImage, int x, int y, int width, int height){
        BufferedImage croppedImage = bufferedImage.getSubimage(x, y, width, height);
        return croppedImage;
    }
}