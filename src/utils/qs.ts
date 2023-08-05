type StringifyOptions = {
  addQueryPrefix?: boolean;
};
type StringifyQSMethod = (
  params: Dictionary,
  options?: StringifyOptions
) => string;
class QS {
  static stringify: StringifyQSMethod = (params, options = {}) => {
    const { addQueryPrefix = false } = options;
    const stringParams = Object.entries(params).reduce(
      (acc, [key, value]) => `${acc}${acc ? "&" : ""}${key}=${value}`,
      ""
    );
    return `${stringParams && addQueryPrefix ? "?" : ""}${stringParams}`;
  };
}
export default QS