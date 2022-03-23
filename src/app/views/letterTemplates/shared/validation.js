export const validateLetterTemplate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Please enter the letter template's title";
  }

  if (!values.content) {
    errors.content = "The content cannot be totally empty";
  }

  if (values.tags) {
    const tagsArrayErrors = [];
    values.tags.forEach((tag, tagIndex) => {
      const tagErrors = {};
      if (!tag.value || tag.value === "") {
        tagErrors.value = "Please select the tag represented field";
        tagsArrayErrors[tagIndex] = tagErrors;
      }
    });

    if (tagsArrayErrors.length) {
      errors.tags = tagsArrayErrors;
    }
  }

  return errors;
};
