<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns="http://www.w3.org/1999/xhtml">
	
	<xsl:output doctype-system="about:legacy-compat"
				indent="yes"
				method="xml"
				omit-xml-declaration="no"/>
	
	<xsl:template match="booksLibrary">
		<html xml:lang="da">
			<head>
				<title>Jim</title>
				<meta charset="utf-8"/>
			</head>
			<body>
				<h1>Hello World</h1>
			
		<ol>
			<xsl:apply-templates/>
		</ol>
		</body>
		</html>
	</xsl:template>
	
	<xsl:template match="books">
		<li>
			<xsl:apply-templates/>
		</li>
	</xsl:template>
	<xsl:template match="name"/>

</xsl:stylesheet>