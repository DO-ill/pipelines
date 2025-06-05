nextflow.enable.dsl = 2

params.input = "data/*"


process writetooutput {

    input:
    path inputFiles

    publishDir 'out', mode: 'copy', pattern: "out/*"

    output:
    path "out/*"

    script:
    """
    #!/bin/bash

    mkdir -p startfolder
    mkdir -p out
    cp -r ${inputFiles} ./out/
    cp -a ./startfolder/. ./out/
    echo "customeName" | tee -a ./out/*.txt
    """
}

workflow {
   filesIn = Channel.fromPath(params.input)
    allFiles = filesIn.collect()
    writetooutput(allFiles)
    
}
