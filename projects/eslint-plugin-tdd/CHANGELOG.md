# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## [Unreleased]
### Dev
    grunt eslint is the part of testing (dogfooding, you know)


## [0.5.0]
### Added
    assert-no-operator introduced

### Changed
    corrected error messages (there's no such thing like assert.equalStrict)

## [0.4.0] - 2016-01-19
### Added
    assert-enforce-least-most introduced
    assert-no-typeof introduced

### Changed
    assert is treated as assert.isTrue in assert-enforece-above-below, assert-enforce-least-most


## [0.3.0] - 2015-12-29
### Added
    assert-enforce-below-above is introduced

### Changed
    assert-enforce-implicit-comparison for assert.isTrue / assert.isFalse
    assert-no-boolean-negation now checks for `assert(!expressions)` as well
    Dev - using grunt for testing lifecycle, code coverage tests are introduced
    

## [0.2.0] - 2015-12-22
### Added
    assert-enforce-implicit-comparison introduced

### Changed
    tests are accessing rules through index.js, this makes us sure they are exported


## [0.1.1] - 2015-12-21
### Fixed 
    assert-no-boolean-negation has not been properly imported

## [0.1.0] - 2015-12-21
### Added
    assert-no-boolean-negate introduced

### Fixed
    fixed tests launching for assert-enforce-boolean


## [0.0.1] - 2015-12-18
### Added
    assert-enforce-boolean introduced

### Changed
    package renamed from eslint-plugin-chai to eslint-plugin-tdd
