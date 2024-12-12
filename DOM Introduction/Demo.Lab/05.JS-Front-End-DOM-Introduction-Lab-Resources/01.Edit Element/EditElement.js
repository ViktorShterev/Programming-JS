function editElement(ref, match, replacer) {
    
    const text = ref.textContent;
    const editedText = text.replace(new RegExp(match, "g"), replacer);

    ref.textContent = editedText;
}