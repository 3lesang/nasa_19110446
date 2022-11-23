const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;
function getPagination(query) {
  const page = Map.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Map.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;
  return {
    skip,
    limit,
  };
}
module.exports = {
  getPagination,
};
