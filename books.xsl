<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns="http://www.w3.org/1999/xhtml">

	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" href="style.css"/>
			</head>
			<body>
				<xsl:for-each select="booksLibrary/books">
					<div>
						<xsl:apply-templates select="title">
					</div>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="title">
		<div style="background-color:green">
			<xsl:value-of select="."/>
		</div>
	</xsl:template>
</xsl:stylesheet>