# Filesystem Puzzle Part 1


## Intro

 - Used `filesystem-puzzle-input.txt` to generate a bash script to create folder structure. Directory structure present in `filesystem-puzzle-input.txt` has been placed in `/content` to separate out functional code from file system to be checked. 
 - Used Node v18.15.0

## Running

Following command will trigger the bash scripts to build folder structure and run code to find folders with files smaller than 100000
  
    npm run file


## Solution

 - Using fs.promises i created a `getFileSizes()` function that takes in a path name `/content` 
 - Using `isDirectory()` to identify a folder and recall `getFileSizes()` but no count of entire directory is performed.
 - Using `isFile()` to collect file size, and parent directory
 - `getFileSizes()` returns an array of all files in entire file system
 - Using response from `getFileSizes()` created a new object of directory + count of each file with the same parent directory
 - The response from this was then used to `filter` the object returning directories that where larger smaller 100000

## Output

Identified Directories 

 dpllhlcv, rzj, mvqfrq, zfwffjn, mgjdlmrz, dqtbltwp, gbddb, gpqssnq, tlltjd, fwdpw, nbldsrfq, wpj, hlh, nfqzjs, jnrrwt, dvcqnv, jnjzlhhw, mfbhtb, gbjtzhj, mfsr, nzbdsvt, lfpltbmd, lmnvgrm, bsfqcv, dfhzcft, snjv 

Amount of directories <= 100000 = 26

Total count of directories no larger than 100000 : 1301411
