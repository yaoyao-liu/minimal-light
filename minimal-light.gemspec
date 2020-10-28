# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name          = 'minimal-light'
  s.version       = '1.0.0'
  s.license       = 'CC0-1.0'
  s.authors       = ['Yaoyao Liu', 'MPI for Informatics']
  s.email         = ['yaoyao.liu@mpi-inf.mpg.de']
  s.homepage      = 'https://github.com/yaoyao-liu/minimal-light'
  s.summary       = 'Minimal Light is a Jekyll theme for academic GitHub Pages'

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.platform = Gem::Platform::RUBY
  s.required_ruby_version = '~> 2.4'
  s.add_runtime_dependency 'jekyll', '> 3.5', '< 5.0'
  s.add_runtime_dependency 'jekyll-seo-tag', '~> 2.0'
  s.add_development_dependency 'html-proofer', '~> 3.0'
  s.add_development_dependency 'rubocop', '~> 0.50'
  s.add_development_dependency 'w3c_validators', '~> 1.3'
end
