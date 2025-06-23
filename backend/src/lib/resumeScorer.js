function scoreResume(text,requiredKeywords){
    const loweredText = text.toLowerCase();
    let score = 0;
    requiredKeywords.forEach(keyword=>{
        if(loweredText.includes(keyword.toLowerCase())){
            score+=10;
        }
    });
    if(score>=70) return 'Best';
    if(score>=40) return 'Better'
    return 'Good';
}