<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns="http://www.w3.org/1999/xhtml">

	<xsl:template match="/">
		<html>
			<body>
				<xsl:for-each select="bookslibrary/books">
					<ul>
						<xsl:apply-templates select="title">
					</ul>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="title">
		<ul style="background-color:green">
			<xsl:value-of select="."/>
		</ul>
	</xsl:template>


</xsl:stylesheet>
	
<!-- <xsl:output doctype-system="about:legacy-compat"
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

</xsl:stylesheet> -->