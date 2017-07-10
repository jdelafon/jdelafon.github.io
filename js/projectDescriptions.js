


function generateProjects() {
    generateProject({
        title: "SourceData",
        date: "2017",
        disabled: true,
        stack: "Neo4j"
    });
    generateProject({
        title: "DataShield",
        date: "2017",
        disabled: true,
        stack: "R, maths"
    });
    generateProject({
        title: "UHTS LIMS",
        date: "2017",
        disabled: true,
        stack: "Scala/Play/Slick, Javascript/React",
        images: [{
            src: "images/lims/lims.png"
        }]
    });
    generateProject({
        title: "BAM-server",
        date: "2016",
        mainUrl: "http://bam-server-scala.readthedocs.io/en/latest/src/about.html",
        sourceUrl: "https://github.com/chuv-ssrc/bam-server",
        role: "",
        description: "",
        stack: "Scala/Play, Javascript/React",
        images: [{
            src: "images/bam-server/client-demo.png"
        }]
    });
    generateProject({
        title: "FHIR-SMART",
        date: "2016",
        mainUrl: null,
        sourceUrl: "https://github.com/chuv-ssrc/smart-react",
        role: "",
        description: "",
        stack: "OAuth 2.0, Javascript / React",
        images: [{
            src: "images/fhir/3.png"
        },{
            src: "images/fhir/4.png"
        }]
    });
    generateProject({
        title: "Dotlet",
        date: "2016",
        mainUrl: "http://dotlet.vital-it.ch/",
        sourceUrl: "",
        role: "",
        description: "",
        stack: "Javascript / React",
        images: [{
            src: "images/dotlet/dotlet.png"
        }]
    });
    generateProject({
        title: "Varapp",
        date: "2015-2016",
        mainUrl: "https://varapp-demo.vital-it.ch",
        sourceUrl: ["https://github.com/jdelafon/varapp-backend-py",
            "https://github.com/jdelafon/varapp-frontend-react"],
        role: "",
        description: "",
        stack: "Python/Django/Cython, Javascript/React, Redis, Selenium",
        images: [{
            src: "images/varapp/varapp-main.png"
        }]
    });
    generateProject({
        title: "Rnacounter",
        date: "2014",
        mainUrl: "https://pypi.python.org/pypi/rnacounter",
        stack: "Python/Cython"
    });
    generateProject({
        title: "Gless",
        date: "2012",
        mainUrl: "",
        sourceUrl: "",
        role: "",
        description: "",
        stack: "Python/tk",
        images: [{
            src: "images/gless/gless1.png"
        },{
            src: "images/gless/gless2.png"
        }]
    });
    generateProject({
        title: "BMC",
        date: "2013",
        mainUrl: "http://invitrotox.uni-konstanz.de/bmc",
        stack: "Javascript/jQuery",
        images: [{
            src: "images/bmc/bmc.png"
        }]
    });
    generateProject({
        title: "HTSStation",
        date: "2010-2014",
        mainUrl: "http://htsstation.epfl.ch/",
        sourceUrl: "",
        role: "",
        description: "http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0085879",
        stack: "Python",
        images: [{
            src: "images/htsstation/htsstation.png"
        }]
    });
    generateProject({
        title: "Rigert Consulting",
        date: "2010",
        mainUrl: "http://www.rigertconsulting.ch/",
        sourceUrl: null,
        role: "",
        description: "",
        stack: "Joomla",
        images: [{
            src: "images/rigert/rigert.png"
        }]
    });
}