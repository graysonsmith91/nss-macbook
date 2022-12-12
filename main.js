/* 

<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> 

*/


const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


/*
    You need to define a function that takes that object as input 
    (needs a parameter), and outputs (returns) the following HTML 
    representation of that computer.
*/



const macbookHTMLMaker = (macObject) => {
    const macHTMLSection = `<section id="computer--${macObject.id}">\n\t<h1>${macObject.manufacturer} ${macObject.make}</h1>\n\t<div>Model: ${macObject.model}</div>\n\t<div>Memory: ${macObject.specs.memory} GB</div>\n\t<div>Hard drive space: ${macObject.specs.hardDrive}</div>\n\t<div>Processor speed: ${macObject.specs.processor} Ghz</div>\n</section>\n`
    return macHTMLSection
}



const stringReturnedFromFunction = macbookHTMLMaker(computer)
console.log(stringReturnedFromFunction)