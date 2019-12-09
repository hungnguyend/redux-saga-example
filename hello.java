public static void  test900913() {
        try {
            CoordinateReferenceSystem sourceCRS;
            sourceCRS = CRS.decode("EPSG:4326");
            CoordinateReferenceSystem googleCRS = CRS.decode("EPSG:4326");
            CoordinateReferenceSystem officialCRS = CRS.decode("EPSG:4326");

            MathTransform transformGoogle = CRS.findMathTransform(sourceCRS, googleCRS, true);
            MathTransform transformOfficial = CRS.findMathTransform(sourceCRS, officialCRS, true);

            org.locationtech.jts.geom.Coordinate sourceCoord = new org.locationtech.jts.geom.Coordinate(526433, -177910);
            org.locationtech.jts.geom.Coordinate destCoordGoogle = JTS.transform(sourceCoord, null, transformGoogle);
            Coordinate destCoordOfficial = JTS.transform(sourceCoord, null, transformOfficial);
            System.out.println(destCoordGoogle.getX());
            System.out.println(destCoordGoogle.getY());

            System.out.println(destCoordOfficial.getX());
            System.out.println(destCoordOfficial.getY());
           // Assert.assertEquals(destCoordOfficial, destCoordGoogle);
        } catch (Exception e) {
            java.util.logging.Logger.getGlobal().log(java.util.logging.Level.INFO, "", e);
           // Assert.fail(e.getClass().getSimpleName() + " should not be thrown.");
        }
    }
https://gis.stackexchange.com/questions/206050/convert-from-epsg27700-to-latitude-and-longitude

Another option is Apache SIS - http://sis.apache.org. I found it cleaner and faster than most solutions:

val sourceCRS = CRS.forCode("EPSG:27700")
val targetCRS = CRS.forCode("EPSG:4326")

val operation = CRS.findOperation(sourceCRS, targetCRS, null)

// Threadsafe: https://sis.apache.org/apidocs/org/apache/sis/referencing/operation/transform/AbstractMathTransform.html
val transform = operation.getMathTransform

val ptSrc = new DirectPosition2D(450077, 356089)
val ptDst = transform.transform(ptSrc, null)

println("Source: " + ptSrc)
println("Target: " + ptDst)
This produces:

Source: POINT(450077 356089)
Target: POINT(53.09965984661642 -1.2535570562768357)
For dependencies you'd need:

    <dependency>
        <groupId>org.apache.sis.core</groupId>
        <artifactId>sis-referencing</artifactId>
        <version>0.8</version>
    </dependency>
    <dependency>
        <groupId>org.apache.sis.non-free</groupId>
        <artifactId>sis-embedded-data</artifactId>
        <version>0.8</version>
        <scope>runtime</scope>
    </dependency>
shareimprove this answer
