let firstAnswer = window.prompt('Do you head left or right?')
if (firstAnswer === 'left'){
    let secondAnswer = window.prompt('you come across a stray cat.It scampers off down a small hole, just larger enough for you to crawl through.Do you follow it, or continue on your path?')
    if (secondAnswer ==='follow it'){
        let thirdanswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe heaven.')
        if (thirdanswer ==='stay'){
            window.alert('you live happily amongst the cats for the rest of you days.')
        }
        else if(thirdAnswer === 'spread the word'){
           let thirdAnswer = window.alert('After leavin the cat colony, you are never able to find it again, without proof, no one believes your story which passes into legend nonetheless')
    
    if(secondAnswer === 'continue'){
        let thirdAnswer = window.prompt('you come across chamber that reaches upward to a shining light above. There is a ling, winding staircase. and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
        if(thirdAnswer === 'ladder'){
           let fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
        }
        else if(thirdAnswer === "staircase"){
            let fourthAnswer = window.alert('After ascending the staircase, you discover a shinny blue stone, which you take home and cherish forever.')
        } 
    }
}           
else if(firstAnswer === 'right'){
    let secondAnswer = window.prompt('you come across a snoring Dragon. On the other side of him, you see shinny chest of treasure. Anotherpath would lead you away from the dragon altogether. Which path do you take?')
    if(secondAnswer === "past the dragon"){
        let thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respondd, to stay or run:')
        if(thirdAnswer === "stay"){
            let fourthAnswer = window.prompt('You and the dragon have an uplifting conversation dabout local politics and become lifelong friends.')

        }
        else if(thirdAnswer === 'run'){
            let fourthAnswer = window.prompt('Quickly. you run back to the caves entrance. Sheepish, you return home.')
        }
    }    
        
        else if(secondAnswer === 'away from the dragon'){
            let thirdAnswer = window.prompt('After walking a while longer, you come across a shinny blue flower. It is so beautiful that you decide you must either draw it or pick it. which do you do?')}
            if(thirdAnswer === 'draw it'){
            let thirdAnswer = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')
            }
            else if(thirdAnswer === 'pick it'){
                let fourthAnswer = window.alert('You pick the flower bring it home, and all marvel at its brilliance. However over time it fades and eventually crumbles to dust.')
            }
        }
    }
}




                    




