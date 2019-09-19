# Ruby Testing

- [Ruby Testing](#ruby-testing)
  - [What is testing?](#what-is-testing)
  - [Why test?](#why-test)
  - [How to test?](#how-to-test)

## What is testing?

Does your code do what it's supposed to. 
As programmers, we automated tests whenever possible.

- Code that tests code

## Why test?

Does the program work? Does it do what it should? Does it act like expected?

Testing points out defects & errors that are made during development that may have otherwise been overlooked.

Updating gems and refactoring code can break things, so testing can verify that your app works as inteneded.

## How to test?

```text
    Given... When... Then...
```

```Given, when, then``` is a testing methodology that follows:

- Given some situation (eg. a user)

- When something happens

- Then what should happen

Then is the state of the program after the test

## Minitest

Not really used for Rails, but used for pure ruby
To install:

```shell
gem install minitest
```

### Example minitest:

```ruby
require "minitest/autorun"
class AwesomeTest < MiniTest::Test

    # method name MUST start with test
    def test_length
        assert_equal(2, 1+1)
    end

end
```

__IMPORTANT:__ The methods of a test class must start with `test_`

```ruby
assert_equals(<expected>, <expression>)
```

A line that begins with an `assert*` method is called an assertion. There can be multiple assertions per test, but it is reccomended to keep it to a minumum (or just one)

## How to run a test

To run this a test file, use `ruby <file>_test.rb`

To see the names of the tests, add the `--verbose flag`

## Types of testing

- ### Unit testing
  
  - Testing a minimal piece of code, isolated from the rest of your application

- ### Integration testing

  - Testing a section of the application as a whole
  - In rails, we'll test our controllers as integration tests

- ### Functional testing

  - Testing the application as a whole against its requirements
  - For a web application, this might be simulating a browser with a headless Chrome browser or Selenium

## TDD

Test Driven Development

- Add a test
- Run all tests and see if the new one fails
- Write some code
- Run tests
- Refactor code
- Repeat

## RSpec

__IMPORTANT: Every test rebuilds the database__

Add `gem rspec` to your gemfile

The `spec/` folder holds all your tests.

Ensure that:

- Every test is independant of each other
- The test_database should be empty

## RSpec with rails

```ruby
require 'rails_helper'

RSpec.describe JobPost, type: :model do
  describe "validates" do 

  end
end
```

`describe` is used to group related tests together.
It's primarily used as an organization tool. All of the grouped tests should be written inside the block of the method.

To write a test case in RSpec, we can use the keyword `it`

## `it`

`it` is a keyword which is used to define an 'example' (test case). The string argument often uses the word should and is meant to describe what specific behavior should happen in the block.

ie.

```ruby
    it("should <do/have something>") do
        expect(<actual value>).to(<matcher>)
    end
```

To run your tests with rspec, simply run `rspec`
or to get more info `rspec -f d`

A list of all possible rspec matchers [here](https://relishapp.com/rspec/rspec-expectations/docs/built-in-matchers)

### Method tests

As per the ruby docs, methods that are described with a `.` are class methods while those described with a `#` in front are instance methods.

## Controller Testing

_Controller testing doesn't come natively with rails 5+ anymore, so add `gem rails-controller-testing`_ to your Gemfile.

In a test block, you can use `get` (and also `post`, `delete`, `patch`, etc.) to simulate a get request

```ruby
it "should do something" do
    get(:new) # This would simulate a get request to new
    response
end
```

The response object is avaiable inside any controller. It is similar to the response available in Express middleware. RSpec makes it available when testing to verify its contents

```ruby
expect(response).to(render_template :template_name)
```

To work with instance variables, use `assigns`:

```ruby
expect(assigns :job_post).to(be_a_new JobPost)
```

In the above example, `assigns`, returns the value of the instance variable @job_post from our JobPostsController and `be_a_new` checks if it's an _unpersisted_ instance of its argument.

### `descibe` vs. `context`

Functionally the same, however context is usually used to seperate branching code paths. They are both organization methods.

## Factories

A factory is something that lets you generate valid objects for a model.

To use factories, use the gem `factory_bot_rails`

Factory bot gives us a few useful methods.

- `FactoryBot.attributes_for(:job_post)`
It uses the factory to return a plain hash for the parameters required to create a job post.

- `FactoryBot.build(:job_post)`
Returns a new __unpersisted__ instance of a job post using the factory

- `FactoryBot.create(:job_post)`
Returns a new __persisted__ instance of a job post using the factory

__IMPORTANT: Factories should always create a valid instance__

An example factory for a job_post model:

```ruby
  title { Faker::Job.title }
  description { Faker::Job.field }
  min_salary { rand(20_001..100_000) }
  min_salary { rand(100_001..300_000) }
  company_name { Faker::Company.name }
```
