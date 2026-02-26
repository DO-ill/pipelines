

process HELLO_WORLD {
  tag "hello"

  output:
    path "hello.txt"

  """
  echo "Hello World from an unsupported Nextflow version" > hello.txt
  """
}

workflow {
  HELLO_WORLD()
}
