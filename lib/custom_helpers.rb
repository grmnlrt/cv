module CustomHelpers
  def age_calculator(day,month,year)
    birthday = Date.new(year,month,day)
    now = Date.today
    days = (now - birthday).to_i
    days / 365
  end
end
